/*jslint node: true */
'use strict';

import { wrap } from 'rest';
import mime from 'rest/interceptor/mime';
import params from 'rest/interceptor/params';
import timeout from 'rest/interceptor/timeout';

/**
 * KeyID services REST client.
 * @class  KeyIDService
 * @param {String} url       - KeyID services URL.
 * @param {String} license   - KeyID services license key.
 * @param {Number} timeoutMs - REST web service timeout.
 */
class KeyIDService {
  constructor(url, license, timeoutMs = 1000) {
    this.url = url;
    this.license = license;
    this.client = wrap(params).wrap(timeout, { timeout: timeoutMs });
  }
  /**
   * URL encodes the properties of a JSON object.
   * @param  {Object} obj - JSON object.
   * @return {Object} 	- URL encoded JSON object.
   */
  encodeJSONProperties(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        obj[key] = encodeURIComponent(obj[key]);
      }
    }
    return obj;
  }
  /**
   * Performs a HTTP post to KeyID REST services.
   * @param  {String} path - REST URI suffix.
   * @param  {Object} data - Object that will be converted to JSON and sent in POST request.
   * @return {Promise}     - REST request and response.
   */
  post(path, data) {
    data.License = this.license;
    var dataEncoded = this.encodeJSONProperties(data);
    var dataEncodedJSON = JSON.stringify(dataEncoded);
    var request = {
      path: this.url + path,
      method: 'POST',
      entity: '=[' + dataEncodedJSON + ']',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };
    return this.client(request);
  }
  /**
   * Performs a HTTP get to KeyID REST services.
   * @param  {String} path - REST URI suffix.
   * @param  {Object} data - Object that will be converted to URL parameters and sent in GET request.
   * @return {Promise}     - REST request and response.
   */
  get(path, data) {
    var request = {
      path: this.url + path,
      method: 'GET',
      params: data
    };
    return this.client(request);
  }
  /**
   * Log a typing mistake to KeyID REST services.
   * @param  {String} entityID  - Profile name.
   * @param  {String} mistype   - Typing mistake.
   * @param  {String} sessionID - Session identifier for logging purposes.
   * @param  {String} source    - Application name or identifier.
   * @param  {String} action    - Action being performed at time of mistake.
   * @param  {String} template  [description]
   * @param  {String} page      [description]
   * @return {Promise}          - REST request and response.
   */
  typingMistake(entityID, mistype = '', sessionID = '', source = '', action = '', template = '', page = '') {
    return this.post('/typingmistake', { entityID, mistype, sessionID, source, action, template, page });
  }
  /**
   * Evaluate typing sample.
   * @param  {String} entityID - Profile name.
   * @param  {String} tsData   - Typing sample to evaluate against profile.
   * @param  {String} nonce  	 - Evaluation nonce.
   * @return {Promise}         - REST request and response.
   */
  evaluateSample(entityID, tsData, nonce) {
    return this.post('/evaluate', { entityID, tsData, nonce, Return: 'JSON', Statistics: 'extended' });
  }
  /**
   * Retrieve a nonce.
   * @param  {Number} nonceTime - Current time in .Net ticks.
   * @return {Promise}          - REST request and response.
   */
  nonce(nonceTime) {
    return this.get('/token/' + nonceTime, { 'type': 'nonce' });
  }
  /**
   * Retrieve a profile removal security token.
   * @param  {String} entityID - Profile name.
   * @param  {String} tsData   - Optional typing sample for removal authorization.
   * @return {Promise}         - REST request and response.
   */
  removeToken(entityID, tsData) {
    return this.get('/token/' + entityID, { 'type': 'remove', 'return': 'value' })
      .then(response => {
        return this.post('/token', { entityID, Token: response.entity, ReturnToken: 'True', ReturnValidation: tsData, Type: 'remove', Return: 'JSON' });
      });
  }
  /**
   * Remove a profile.
   * @param  {String} entityID - Profile name.
   * @param  {String} token    - Profile removal security token.
   * @return {Promise}         - REST request and response.
   */
  removeProfile(entityID, token) {
    return this.post('/profile', { entityID, Code: token, Action: 'remove', Return: 'JSON' });
  }
  /**
   * Retrieve a profile save security token.
   * @param  {String} entityID - Profile name.
   * @param  {String} tsData   - Optional typing sample for save authorization.
   * @return {Promise}         - REST request and response.
   */
  saveToken(entityID, tsData) {
    return this.get('/token/' + entityID, { 'type': 'enrollment', 'return': 'value' })
      .then(response => {
        return this.post('/token', { entityID, Token: response.entity, ReturnToken: 'True', ReturnValidation: tsData, Type: 'enrollment', Return: 'JSON' });
      });
  }
  /**
   * Save a profile.
   * @param  {String} entityID - Profile name.
   * @param  {String} tsData   - Typing sample to save.
   * @param  {String} code     - Profile save security token.
   * @return {Promise}         - REST request and response.
   */
  saveProfile(entityID, tsData, code = '') {
    var data = { entityID, tsData, Return: 'JSON', Action: 'v2', Statistics: 'extended' };
    if (code !== '')
      data.Code = code;
    return this.post('/profile', data);
  }
  getProfileInfo(entityID) {
    return this.get('/profile/' + entityID, {});
  }
  monitor(entityID, tsData, entityNotes) {
    return this.post('/monitor', { entityID, tsData, entityNotes });
  }
}

export default KeyIDService;