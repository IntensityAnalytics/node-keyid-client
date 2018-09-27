/*jslint node: true */
'use strict';

import KeyIDService from './keyidservice.js';

/**
 * KeyID services client.
 * @class
 * @param {string} settings - KeyID settings object
 */
class KeyIDClient {
  constructor(settings) {
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
  saveProfile(entityID, tsData, sessionID = '') {
    // try to save profile without a token
    return this.service.saveProfile(entityID, tsData)
      .then(response => {
        var data = JSON.parse(response.entity);
        if (data.Error === 'Invalid license key.')
          throw 'Invalid license key';
        // token is required if there is an error
        if (data.Error === 'New enrollment code required.') {
          // get a save token
          return this.service.saveToken(entityID, tsData)
            .then(response => {
              var data = JSON.parse(response.entity);
              // try to save profile with a token
              return this.service.saveProfile(entityID, tsData, data.Token);
            })
            .then(response => {
              var data = JSON.parse(response.entity);
              return data;
            });
        }
        return data;
      });
  }
  /**
   * Removes a KeyID profile.
   * @param  {String} entityID  - Profile name to remove.
   * @param  {String} tsData    - Optional typing sample for removal authorization.
   * @param  {String} sessionID - Session identifier for logging purposes.
   * @return {Promise}
   */
  removeProfile(entityID, tsData = '', sessionID = '') {
    // get a removal token
    return this.service.removeToken(entityID, tsData)
      .then(response => {
        var data = JSON.parse(response.entity);
        if (data.Error === 'Invalid license key.')
          throw 'Invalid license key';
        if (typeof data.Token !== 'undefined' && data.Token !== null) {
          // remove profile
          return this.service.removeProfile(entityID, data.Token)
            .then(response => {
              var data = JSON.parse(response.entity);
              return data;
            });
        }
        else
          return data;
      });
  }
  /**
   * Evaluates a KeyID profile.
   * @param  {String} entityID  - Profile name to evaluate.
   * @param  {String} tsData    - Typing sample to evaluate against profile.
   * @param  {String} sessionID - Session identifier for logging purposes.
   * @return {Promise}
   */
  evaluateProfile(entityID, tsData, sessionID = '') {
    var nonceTime = this.dotNetTicks();
    return this.service.nonce(nonceTime)
      .then(response => {
        return this.service.evaluateSample(entityID, tsData, response.entity);
      })
      .then(response => {
        var data = JSON.parse(response.entity);
        if (data.Error === 'Invalid license key.')
          throw 'Invalid license key';
        // coerce string to boolean
        if (data.Match)
          data.Match = this.alphaToBool(data.Match);
        if (data.IsReady)
          data.IsReady = this.alphaToBool(data.IsReady);
        // return early if there is an error
        if (data.Error === '') {
          // set match to true and return early if using passive validation
          if (this.settings.passiveValidation) {
            data.Match = true;
            return data;
          }
          // evaluate match value using custom threshold if enabled
          else if (this.settings.customThreshold) {
            data.Match = this.evalThreshold(data.Confidence, data.Fidelity);
          }
        }
        return data;
      });
  }
  /**
   * Evaluates a given profile and adds typing sample to profile.
   * @param  {String} entityID  - Profile to evaluate.
   * @param  {String} tsData    - Typing sample to evaluate and save.
   * @param  {String} sessionID - Session identifier for logging purposes.
   * @return {Promise}
   */
  EvaluateEnrollProfile(entityID, tsData, sessionID) {
    return this.evaluateProfile(entityID, tsData, sessionID).then(data => {
      if (data.Error === 'EntityID does not exist.') {
        return this.saveProfile(entityID, tsData, sessionID).then(saveData => {
          if (saveData.Error === '') {
            const evalData = {
              Error: '',
              Match: true,
              IsReady: false,
              Confidence: '100.0',
              Fidelity: '100.0',
              Profiles: '0'
            };
            return evalData;
          }
          else {
            return this.SaveErrorResult();
          }
        });
      }
      if (data.IsReady == false) {
        if (data.Error === '') {
          return this.saveProfile(entityID, tsData, sessionID).then(saveData => {
            if (saveData.Error === '') {
              let evalData = Object.assign({}, saveData);
              evalData.Error = '';
              evalData.Match = true;
              return evalData;
            }
            else
              return this.SaveErrorResult();
          });
        }
        else if (data.Error === 'The profile has too little data for a valid evaluation.' ||
          data.Error === 'The entry varied so much from the model, no evaluation is possible.') {
          return this.saveProfile(entityID, tsData, sessionID).then(saveData => {
            if (saveData.Error === '') {
              let evalData = Object.assign({}, saveData);
              evalData.Error = '';
              evalData.Match = true;
              evalData.Confidence = '100.0';
              evalData.Fidelity = '100.0';
              return evalData;
            }
            else
              return this.SaveErrorResult();
          });
        }
      }
      return data;
    });
  }
  /**
   * Courtesy function that choses normal evaluation or passive enrollment to simplify calling code.
   * @param  {String} entityID  - Profile to evaluate.
   * @param  {String} tsData    - Typing sample to evaluate and save.
   * @param  {String} sessionID - Session identifier for logging purposes.
   * @return {Promise}
   */
  Login(entityID, tsData, sessionID) {
    if (this.settings.loginEnrollment)
      return this.EvaluateEnrollProfile(entityID, tsData, sessionID);
    else
      return this.EvaluateProfile(entityID, tsData, sessionID);
  }
  /**
   * Return object when error saving profile.
   */
  SaveErrorResult() {
    const result = {
      Error: 'Error saving profile.',
      Match: false,
      IsReady: false,
      Confidence: '0',
      Fidelity: '0',
      Profiles: '0'
    };
    return result;
  }
  /**
   * Returns profile information without modifying the profile.
   * @param {String} entityID - Profile to inspect.
   */
  getProfileInfo(entityID) {
    return this.service.getProfileInfo(entityID)
      .then(response => {
        var data = JSON.parse(response.entity);
        return data[0];
      });
  }
  /**
   * Compares a given confidence and fidelity against pre-determined thresholds.
   * @param  {Number} confidence - KeyID evaluation confidence.
   * @param  {Number} fidelity   - KeyID evaluation fidelity.
   * @return {Bool}              - Whether confidence and fidelity meet thresholds.
   */
  evalThreshold(confidence, fidelity) {
    if (confidence >= this.settings.thresholdConfidence &&
      fidelity >= this.settings.thresholdFidelity) {
      return true;
    }
    else {
      return false;
    }
  }
  /**
   * Converts a string value like 'true' to a boolean object.
   * @param  {String} input - String to convert to boolean.
   * @return {Bool}         - Boolean value.
   */
  alphaToBool(input) {
    if (input.toUpperCase().trim() === 'TRUE')
      return true;
    else
      return false;
  }
  /**
   * Converts current time to Microsoft .Net 'ticks'. A tick is 100 nanoseconds.
   * @return {Number} - Current time in 'ticks'.
   */
  dotNetTicks() {
    const EPOCH_OFFSET = 621355968000000000;
    const MS_PER_TICK = 10000;
    var dateTime = new Date();
    var ticks = ((dateTime.getTime() * MS_PER_TICK) + EPOCH_OFFSET);
    return ticks;
  }
  getJS() {
    return this.service.get('/library/keyid', {})
      .then(response => {
        return response.entity;
      });
  }
  getJSVerbose() {
    return this.service.get('/library/keyid-verbose', {})
      .then(response => {
        return response.entity;
      });
  }
}













export default KeyIDClient;