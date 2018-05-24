const KeyID = require('../src/index');
const settings = require('./settings.json');

settings.url = "https://keyidservices.tickstream.com";
let client = new KeyID(settings);  
let entityID = 'javascripttest1';

test('remove profile', () => {
  expect.assertions(1);
  return client.removeProfile(entityID, '', '').then(resp => {
    expect(resp.Error).toBeDefined();
  });
});

test('save profile', () => {
  expect.assertions(1);
  return client.removeProfile(entityID, '', '').then(resp => {
    return client.saveProfile(entityID, 'hZK7bcRADERrcQcc/hlfejAcugAX4MTZFu+1o+OKgKBAycM8DUfBy8UlCxTqABmXrK/1eK735/r8fz4ebyCduO+Tix5XhUCsnxPzesUYHmw5WdG5CE69Wo+4dAmqqzX8FRMxCvhkzc75fk1de1xlmdxaNVlRcWvVgirXndUUpsWDtZ3E9xYx7gp0LpEZg7XFBbGq09WqHdtFSfRqPTCmIBsObNQwy73/0OHECqk5pLWmya4hGNIOLNR4OIi1Hz3N937DqieWgA6j9oNk0Kbyet7eNEv+2g5Yq1C7KUgGrH1bGfavZBfsFw==', '');
  }).then(resp => {
    expect(resp.Error).toBe('');
  });
});

test('get profile', () => {
  expect.assertions(1);
  return client.removeProfile(entityID, '', '').then(() => {
    return client.saveProfile(entityID, 'hZK7bcRADERrcQcc/hlfejAcugAX4MTZFu+1o+OKgKBAycM8DUfBy8UlCxTqABmXrK/1eK735/r8fz4ebyCduO+Tix5XhUCsnxPzesUYHmw5WdG5CE69Wo+4dAmqqzX8FRMxCvhkzc75fk1de1xlmdxaNVlRcWvVgirXndUUpsWDtZ3E9xYx7gp0LpEZg7XFBbGq09WqHdtFSfRqPTCmIBsObNQwy73/0OHECqk5pLWmya4hGNIOLNR4OIi1Hz3N937DqieWgA6j9oNk0Kbyet7eNEv+2g5Yq1C7KUgGrH1bGfavZBfsFw==', '');
  }).then(resp => {
    return client.getProfileInfo(entityID);
  }).then(resp => {
    expect(resp.Error).toBe('');
  });
});

test('login passive enrollment', () => {
  expect.assertions(2);
  return client.removeProfile(entityID, '', '').then(() => {
    return client.saveProfile(entityID, 'hZI7bsQwDETPkhtwKP5Ub7sIUu4BcoA06XT40KlMUcDChquHeeaQzsuGjZggHzIiRKeu7/V4rs/nev0/X48PkFRuirGtn53zEiceM0Drd8dsFmx6vvNkxYlr1hqn6qbG3ep2xwxBqnKyRuEYlOxh1hrn0ElvrW5wzbR3Vs88ZJtvrMECy910a6lkklBu42AFKueUSztYa5yLu2u3yh1TooFh1K07JkAcjkmpYAExRU/bMRY/nabeJ1VcSj3c3I6NsHlK44IpC6e0p22YyjDvabUQXIsd6PXWSRHC+T1gZQTO2q6ddqz8W7Y2CB37Aw==', '');
  }).then(() => {
    return client.saveProfile(entityID, 'hZO5bcRADEVrcQe8j3jTheFwC3ABTjab4pdwJM4QEARlD/+R1JfTMjaORHABVRRxWL/r8Vzfz/X6f34eXwjSORKGWH875y3OGNVV1nvHLDuWYJ6TFSfusPY4x6DkwerWMHOCedfoXBCADbu2uBBLjbizZg1HTLfWJCRKurNmcIr5YL2epLIxsE5yWhE7x4Gpg7XFoaA552mVjrkJOp/WHYsA9lOqcMWIOb1mO9J2TOooQzW1bUruSDp8/R1L5LrRmXYteiHhSlNax6pwKkOB+0GYtMo5FLhvykJY9RywtgLXqzGltdnq9zIKPLAP', ''); 
  }).then(() => {
    return client.saveProfile(entityID, 'hZK7bcRADERrcQcc/hlfejAcugAX4MTZFu+1o+OKgKBAycM8DUfBy8UlCxTqABmXrK/1eK735/r8fz4ebyCduO+Tix5XhUCsnxPzesUYHmw5WdG5CE69Wo+4dAmqqzX8FRMxCvhkzc75fk1de1xlmdxaNVlRcWvVgirXndUUpsWDtZ3E9xYx7gp0LpEZg7XFBbGq09WqHdtFSfRqPTCmIBsObNQwy73/0OHECqk5pLWmya4hGNIOLNR4OIi1Hz3N937DqieWgA6j9oNk0Kbyet7eNEv+2g5Yq1C7KUgGrH1bGfavZBfsFw==', ''); 
  }).then(() => {
    return client.saveProfile(entityID, 'hZO5bUQxDERrcQe8j3jTheFwC3ABTpypeMuOPj8JCwIUPcxwhpLTMjaORHBHx0ghWZ/r8Vzvz/X6Ox+PNwSpXKaIra87Z1mwTCOySQ6vXAAYJXQ5p4qpqev6/t81jHRfHXO7YmnGBDENFxPXh7vKEbCzEh1cCbdeOp9cCYkdz667k3AdKvFrJXsHaGDTIhArRwa79OYqRY4xkLdDk5uxnqFizCSYPYNCwUI5p33NWDPVklTw99CgdsMMJXRQo4KpuenQ7x3zBOBTvWIZmXgqRFJYmQesRNh/gYNiwMpsqrAfXTf9AQ==', ''); 
  }).then(() => {
    return client.saveProfile(entityID, 'hZO7bQQxDERrcQf8f+JLD4ZDF+ACnDhT8cdztJQI7Cp9mOEMuU7L2DgSwVOABFlh/azHc30+1/f/+3p8IMjE/e6c5RXD9xcxyWHnqJ6eck4dYySz9XfjGiiicmJuV4w4UWHMGo0TQCUbhmtyXFGF486Vk9kr6p0rp2vgratIIMXk2ipRDgHmwRXbIlQIwgZX6XKZUfOdch0zIIBaxJlhwxxQhrXWgV0xVU8bTHfMPKuRw1RbUq86gIft75hwpRjU2mW6EpDmoLZhJRbDnffe3AyM6a4QD0JQHbAWIaDUcvgd+mxRW1U6sRc=', ''); 
  }).then(() => {
    return client.saveProfile(entityID, 'hZK7bYMxDIRnyQY8vlm7NYKUGSADpEmn4S24Mi0iP1QIAj7c8agLXi4uWUzGCrNQpfWzbvf1eV/fz/N1+wBp5zzYaP2+c16vGAtDeZRD57Yi+SkXbTrWDAtaf/+7CqJIByy8Yb5viWm4bFwQk+cwXJNTDZb0K1djV2a/dDUhFb50taxknrK2lXi67ufgCkzc4apNLtQgU01m7MzQsd05Njkz7IK9YEkB+PBfM3aYWkuaVsCu16nWMSegdFBrzcxyuGJQe8PCQ+xqvUWM1KFKPWkhWbbaibUIpSUY19tmq4RU5YE9AA==', ''); 
  }).then(() => {
    return client.evaluateProfile(entityID, 'hZK7bcRADERrcQcc/hlfejAcugAX4MTZFu+1o+OKgKBAycM8DUfBy8UlCxTqABmXrK/1eK735/r8fz4ebyCduO+Tix5XhUCsnxPzesUYHmw5WdG5CE69Wo+4dAmqqzX8FRMxCvhkzc75fk1de1xlmdxaNVlRcWvVgirXndUUpsWDtZ3E9xYx7gp0LpEZg7XFBbGq09WqHdtFSfRqPTCmIBsObNQwy73/0OHECqk5pLWmya4hGNIOLNR4OIi1Hz3N937DqieWgA6j9oNk0Kbyet7eNEv+2g5Yq1C7KUgGrH1bGfavZBfsFw==', '');
  }).then(resp => {
    expect(resp.Confidence).toBe('98');
    expect(resp.Fidelity).toBe('96');
  });
});

test('login passive enrollment bad data', () => {
  client.settings.loginEnrollment = true;
  expect.assertions(4);
  return client.removeProfile(entityID, '', '').then(() => {
    return client.Login(entityID, 'M7asMTM2MzMwNDSxMDQxMLY0AIKa0hpnnxo/n5oIMPR3AgA=', '');
  }).then(resp => {
    client.settings.loginEnrollment = false;
    expect(resp.Error).toBe('Error saving profile.');
    expect(resp.Confidence).toBe('0');
    expect(resp.Fidelity).toBe('0');
    expect(resp.Match).toBe(false);
  });
});