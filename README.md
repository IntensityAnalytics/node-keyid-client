# node-keyid-client

A package to allow you to peform second factor authentication using Intensity Analytics TickStream.KeyID.

## Install

`npm install keyid-client`

## Usage

The keyid-client package provides several asynchronous functions that return JavaScript promises.

For more information pleas see the API documentation in the docs folder.

```javascript
const KeyID = require('keyid-client');
const settings = {
	"license": "yourlicensekey",
	"url": "https://keyidservicesurl",
	"passiveValidation": false,
	"passiveEnrollment": false,
	"customThreshold": false,
	"thresholdConfidence": 70.0,
	"thresholdFidelity": 50.0,
	"timeout": 1000
};

var keyID = new KeyID(settings);  

var entityID = 'someusername';
var tsData = 'tsdata captured from a textbox using keyid browser javscript library';

keyID.removeProfile(entityID)
.then(()=>
{
	return keyID.saveProfile(entityID, tsData);
})
.then(()=>
{	
	return keyID.evaluateProfile(entityID, tsData);
})
.then(evalResponse=>
{
	console.log(evalResponse);
})
.catch(error=>
{
	console.log(error);
});
```