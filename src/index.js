/*jslint node: true */

"use strict";
const KeyIDService = require('./keyidservice.js');

/**
 * KeyID services client
 * @class
 * @param {string} settings - KeyID settings file
 */
function KeyIDClient(settings)
{
	this.settings = settings;
	this.service = new KeyIDService(settings.url, settings.license, settings.timeout);
}

/**
 * Saves a given KeyID profile entry.
 * @param  {String} entityID  - Profile name to save.
 * @param  {String} tsData    - Typing sample data to save.
 * @param  {String} sessionID - Session identifier for logging purposes.
 * @return {Promise}          
 */
KeyIDClient.prototype.saveProfile = function(entityID, tsData, sessionID = '')
{
	// try to save profile without a token
	return this.service.saveProfile(entityID, tsData)
	.then(response=>
	{
		var data = JSON.parse(response.entity);
				
		// token is required
		if (data.Error !== '')
		{
			// get a save token
			return this.service.SaveToken(entityID, tsData)
			.then(response=>
			{
				var data = JSON.parse(response.entity);

				// try to save profile with a token
				return this.service.saveProfile(entityID, tsData, data.Token);
			})
			.then(response=>
			{
				var data = JSON.parse(response.entity);
				return data;
			});
		}
	});
};	

/**
 * Removes a KeyID profile.
 * @param  {String} entityID  - Profile name to remove.
 * @param  {String} tsData    - Optional typing sample for removal authorization.
 * @param  {String} sessionID - Session identifier for logging purposes.
 * @return {Promise}          
 */
KeyIDClient.prototype.removeProfile = function(entityID, tsData = '', sessionID = '')
{
	// get a removal token
	return this.service.removeToken(entityID, tsData)
	.then(response=>
	{
		var data = JSON.parse(response.entity);

		return this.service.removeProfile(entityID, data.Token)
		.then(response=>
		{
			var data = JSON.parse(response.entity);
			return data;
		});
	});	
};

/**
 * Evaluates a KeyID profile.
 * @param  {String} entityID  - Profile name to evaluate.
 * @param  {String} tsData    - Typing sample to evaluate against profile.
 * @param  {String} sessionID - Session identifier for logging purposes.
 * @return {Promise}          
 */
KeyIDClient.prototype.evaluateProfile = function(entityID, tsData, sessionID = '')
{
	var nonceTime = this.dotNetTicks();

	return this.service.nonce(nonceTime)
	.then(response=>
	{
		return this.service.evaluateSample(entityID, tsData, response.entity);
	})
	.then(response=>
	{
		var data = JSON.parse(response.entity);
		
		// return early if profile does not exist
		if (data.Error === 'EntityID does not exist.')
		{
			return data;
		}

		// coerce string to boolean
		data.Match = this.alphaToBool(data.Match);
		data.IsReady = this.alphaToBool(data.IsReady);
		
		// set match to true and return early if using passive validation
		if (this.settings.passiveValidation)
		{
			data.Match = true;
			return data;
		}
		// evaluate match value using custom threshold if enabled
		else if (this.settings.customThreshold)
		{
			data.Match = this.evalThreshold(data.Confidence, data.Fidelity);
		}
		
		return data;	
	});
};

/**
 * Evaluates a given profile and adds typing sample to profile.
 * @param  {String} entityID  - Profile to evaluate.
 * @param  {String} tsData    - Typing sample to evaluate and save.
 * @param  {String} sessionID - Session identifier for logging purposes.
 * @return {Promise}          
 */
KeyIDClient.prototype.loginPassiveEnrollment = function(entityID, tsData, sessionID = '')
{
	return this.evaluateProfile(entityID, tsData, sessionID)
	.then(data=>
	{
		// in base case that no profile exists save profile async and return early
		// todo replace error string below with correct one
		if (data.Error === 'EntityID does not exist.' ||
			data.Error === 'The profile has too little data for a valid evaluation.' ||
			data.Error === 'The entry varied so much from the model, no evaluation is possible.')
		{
			return this.saveProfile(entityID, tsData, sessionID)
			.then(saveresponse=>
			{
				data.Match = true;
				data.Confidence = 100.0;
				data.Fidelity = 100.0;
				return data;	
			});
		}	

		// if profile is not ready save profile async and return early
		if (data.IsReady === false)
		{
			return this.saveProfile(entityID, tsData, sessionID)
			.then(saveresponse=>
			{
				data.Match = true;
				return data;
			});
		}
		
		return data;
	});
};

/**
 * Compares a given confidence and fidelity against pre-determined thresholds.
 * @param  {Number} confidence - KeyID evaluation confidence.
 * @param  {Number} fidelity   - KeyID evaluation fidelity.
 * @return {Bool}              - Whether confidence and fidelity meet thresholds.
 */
KeyIDClient.prototype.evalThreshold = function(confidence, fidelity)
{
	if (confidence >= this.settings.thresholdConfidence &&
		fidelity >= this.settings.thresholdFidelity)
	{
		return true;
	}
	else
	{
		return false;
	}
};

/**
 * Converts a string value like 'true' to a boolean object.
 * @param  {String} input - String to convert to boolean.
 * @return {Bool}         - Boolean value.
 */
KeyIDClient.prototype.alphaToBool = function(input)
{
	if (input.toUpperCase().trim() == 'TRUE')
		return true;
	else
		return false;
};

/**
 * Converts current time to Microsoft .Net 'ticks'. A tick is 100 nanoseconds.
 * @return {Number} - Current time in 'ticks'.
 */
KeyIDClient.prototype.dotNetTicks = function()
{
	const EPOCH_OFFSET = 621355968000000000;
	const MS_PER_TICK = 10000;
	var dateTime = new Date();
	var ticks = ((dateTime.getTime() * MS_PER_TICK) + EPOCH_OFFSET);
	return ticks;
};

module.exports = KeyIDClient;