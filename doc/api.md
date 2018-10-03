## Classes

<dl>
<dt><a href="#KeyIDClient">KeyIDClient</a></dt>
<dd><p>KeyID services client.</p>
</dd>
<dt><a href="#KeyIDService">KeyIDService</a></dt>
<dd></dd>
</dl>

<a name="KeyIDClient"></a>

## KeyIDClient
KeyID services client.

**Kind**: global class  

* [KeyIDClient](#KeyIDClient)
    * [new KeyIDClient(settings)](#new_KeyIDClient_new)
    * [.saveProfile(entityID, tsData, sessionID)](#KeyIDClient+saveProfile) ⇒ <code>Promise</code>
    * [.removeProfile(entityID, tsData, sessionID)](#KeyIDClient+removeProfile) ⇒ <code>Promise</code>
    * [.evaluateProfile(entityID, tsData, sessionID)](#KeyIDClient+evaluateProfile) ⇒ <code>Promise</code>
    * [.evaluateEnrollProfile(entityID, tsData, sessionID)](#KeyIDClient+evaluateEnrollProfile) ⇒ <code>Promise</code>
    * [.login(entityID, tsData, sessionID)](#KeyIDClient+login) ⇒ <code>Promise</code>
    * [.saveErrorResult()](#KeyIDClient+saveErrorResult)
    * [.getProfileInfo(entityID)](#KeyIDClient+getProfileInfo)
    * [.evalThreshold(confidence, fidelity)](#KeyIDClient+evalThreshold) ⇒ <code>Bool</code>
    * [.alphaToBool(input)](#KeyIDClient+alphaToBool) ⇒ <code>Bool</code>
    * [.dotNetTicks()](#KeyIDClient+dotNetTicks) ⇒ <code>Number</code>

<a name="new_KeyIDClient_new"></a>

### new KeyIDClient(settings)

| Param | Type | Description |
| --- | --- | --- |
| settings | <code>string</code> | KeyID settings object |

<a name="KeyIDClient+saveProfile"></a>

### keyIDClient.saveProfile(entityID, tsData, sessionID) ⇒ <code>Promise</code>
Saves a given KeyID profile entry.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile name to save. |
| tsData | <code>String</code> | Typing sample data to save. |
| sessionID | <code>String</code> | Session identifier for logging purposes. |

<a name="KeyIDClient+removeProfile"></a>

### keyIDClient.removeProfile(entityID, tsData, sessionID) ⇒ <code>Promise</code>
Removes a KeyID profile.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile name to remove. |
| tsData | <code>String</code> | Optional typing sample for removal authorization. |
| sessionID | <code>String</code> | Session identifier for logging purposes. |

<a name="KeyIDClient+evaluateProfile"></a>

### keyIDClient.evaluateProfile(entityID, tsData, sessionID) ⇒ <code>Promise</code>
Evaluates a KeyID profile.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile name to evaluate. |
| tsData | <code>String</code> | Typing sample to evaluate against profile. |
| sessionID | <code>String</code> | Session identifier for logging purposes. |

<a name="KeyIDClient+evaluateEnrollProfile"></a>

### keyIDClient.evaluateEnrollProfile(entityID, tsData, sessionID) ⇒ <code>Promise</code>
Evaluates a given profile and adds typing sample to profile.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile to evaluate. |
| tsData | <code>String</code> | Typing sample to evaluate and save. |
| sessionID | <code>String</code> | Session identifier for logging purposes. |

<a name="KeyIDClient+login"></a>

### keyIDClient.login(entityID, tsData, sessionID) ⇒ <code>Promise</code>
Courtesy function that choses normal evaluation or passive enrollment to simplify calling code.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile to evaluate. |
| tsData | <code>String</code> | Typing sample to evaluate and save. |
| sessionID | <code>String</code> | Session identifier for logging purposes. |

<a name="KeyIDClient+saveErrorResult"></a>

### keyIDClient.saveErrorResult()
Return object when error saving profile.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  
<a name="KeyIDClient+getProfileInfo"></a>

### keyIDClient.getProfileInfo(entityID)
Returns profile information without modifying the profile.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile to inspect. |

<a name="KeyIDClient+evalThreshold"></a>

### keyIDClient.evalThreshold(confidence, fidelity) ⇒ <code>Bool</code>
Compares a given confidence and fidelity against pre-determined thresholds.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  
**Returns**: <code>Bool</code> - - Whether confidence and fidelity meet thresholds.  

| Param | Type | Description |
| --- | --- | --- |
| confidence | <code>Number</code> | KeyID evaluation confidence. |
| fidelity | <code>Number</code> | KeyID evaluation fidelity. |

<a name="KeyIDClient+alphaToBool"></a>

### keyIDClient.alphaToBool(input) ⇒ <code>Bool</code>
Converts a string value like 'true' to a boolean object.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  
**Returns**: <code>Bool</code> - - Boolean value.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | String to convert to boolean. |

<a name="KeyIDClient+dotNetTicks"></a>

### keyIDClient.dotNetTicks() ⇒ <code>Number</code>
Converts current time to Microsoft .Net 'ticks'. A tick is 100 nanoseconds.

**Kind**: instance method of [<code>KeyIDClient</code>](#KeyIDClient)  
**Returns**: <code>Number</code> - - Current time in 'ticks'.  
<a name="KeyIDService"></a>

## KeyIDService
**Kind**: global class  

* [KeyIDService](#KeyIDService)
    * [new KeyIDService(url, license, timeoutMs)](#new_KeyIDService_new)
    * [.encodeJSONProperties(obj)](#KeyIDService+encodeJSONProperties) ⇒ <code>Object</code>
    * [.post(path, data)](#KeyIDService+post) ⇒ <code>Promise</code>
    * [.get(path, data)](#KeyIDService+get) ⇒ <code>Promise</code>
    * [.typingMistake(entityID, mistype, sessionID, source, action, template, page)](#KeyIDService+typingMistake) ⇒ <code>Promise</code>
    * [.evaluateSample(entityID, tsData, nonce)](#KeyIDService+evaluateSample) ⇒ <code>Promise</code>
    * [.nonce(nonceTime)](#KeyIDService+nonce) ⇒ <code>Promise</code>
    * [.removeToken(entityID, tsData)](#KeyIDService+removeToken) ⇒ <code>Promise</code>
    * [.removeProfile(entityID, token)](#KeyIDService+removeProfile) ⇒ <code>Promise</code>
    * [.saveToken(entityID, tsData)](#KeyIDService+saveToken) ⇒ <code>Promise</code>
    * [.saveProfile(entityID, tsData, code)](#KeyIDService+saveProfile) ⇒ <code>Promise</code>

<a name="new_KeyIDService_new"></a>

### new KeyIDService(url, license, timeoutMs)
KeyID services REST client.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | KeyID services URL. |
| license | <code>String</code> | KeyID services license key. |
| timeoutMs | <code>Number</code> | REST web service timeout. |

<a name="KeyIDService+encodeJSONProperties"></a>

### keyIDService.encodeJSONProperties(obj) ⇒ <code>Object</code>
URL encodes the properties of a JSON object.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Object</code> - - URL encoded JSON object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | JSON object. |

<a name="KeyIDService+post"></a>

### keyIDService.post(path, data) ⇒ <code>Promise</code>
Performs a HTTP post to KeyID REST services.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Promise</code> - - REST request and response.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | REST URI suffix. |
| data | <code>Object</code> | Object that will be converted to JSON and sent in POST request. |

<a name="KeyIDService+get"></a>

### keyIDService.get(path, data) ⇒ <code>Promise</code>
Performs a HTTP get to KeyID REST services.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Promise</code> - - REST request and response.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | REST URI suffix. |
| data | <code>Object</code> | Object that will be converted to URL parameters and sent in GET request. |

<a name="KeyIDService+typingMistake"></a>

### keyIDService.typingMistake(entityID, mistype, sessionID, source, action, template, page) ⇒ <code>Promise</code>
Log a typing mistake to KeyID REST services.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Promise</code> - - REST request and response.  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile name. |
| mistype | <code>String</code> | Typing mistake. |
| sessionID | <code>String</code> | Session identifier for logging purposes. |
| source | <code>String</code> | Application name or identifier. |
| action | <code>String</code> | Action being performed at time of mistake. |
| template | <code>String</code> | [description] |
| page | <code>String</code> | [description] |

<a name="KeyIDService+evaluateSample"></a>

### keyIDService.evaluateSample(entityID, tsData, nonce) ⇒ <code>Promise</code>
Evaluate typing sample.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Promise</code> - - REST request and response.  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile name. |
| tsData | <code>String</code> | Typing sample to evaluate against profile. |
| nonce | <code>String</code> | Evaluation nonce. |

<a name="KeyIDService+nonce"></a>

### keyIDService.nonce(nonceTime) ⇒ <code>Promise</code>
Retrieve a nonce.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Promise</code> - - REST request and response.  

| Param | Type | Description |
| --- | --- | --- |
| nonceTime | <code>Number</code> | Current time in .Net ticks. |

<a name="KeyIDService+removeToken"></a>

### keyIDService.removeToken(entityID, tsData) ⇒ <code>Promise</code>
Retrieve a profile removal security token.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Promise</code> - - REST request and response.  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile name. |
| tsData | <code>String</code> | Optional typing sample for removal authorization. |

<a name="KeyIDService+removeProfile"></a>

### keyIDService.removeProfile(entityID, token) ⇒ <code>Promise</code>
Remove a profile.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Promise</code> - - REST request and response.  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile name. |
| token | <code>String</code> | Profile removal security token. |

<a name="KeyIDService+saveToken"></a>

### keyIDService.saveToken(entityID, tsData) ⇒ <code>Promise</code>
Retrieve a profile save security token.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Promise</code> - - REST request and response.  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile name. |
| tsData | <code>String</code> | Optional typing sample for save authorization. |

<a name="KeyIDService+saveProfile"></a>

### keyIDService.saveProfile(entityID, tsData, code) ⇒ <code>Promise</code>
Save a profile.

**Kind**: instance method of [<code>KeyIDService</code>](#KeyIDService)  
**Returns**: <code>Promise</code> - - REST request and response.  

| Param | Type | Description |
| --- | --- | --- |
| entityID | <code>String</code> | Profile name. |
| tsData | <code>String</code> | Typing sample to save. |
| code | <code>String</code> | Profile save security token. |

