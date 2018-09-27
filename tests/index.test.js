const KeyID = require('../src/index');
const settings = require('./settings.json');

settings.url = 'https://keyidservicesvm.tickstream.com';
let client = new KeyID(settings);  
let entityID = 'javascripttest1';

beforeAll(() => {
  jest.setTimeout(50000);
});

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

test('save profile bad data', () => {
  client.settings.loginEnrollment = true;
  expect.assertions(1);
  return client.removeProfile(entityID, '', '').then(() => {
    return client.saveProfile(entityID, 'M7asMTM2MzMwNDSxMDQxMLY0AIKa0hpnnxo/n5oIMPR3AgA=', '');
  }).then(resp => {
    client.settings.loginEnrollment = false;
    expect(JSON.stringify(resp)).toBe('{"Error":"Profile cannot be updated, because of corrupt input data. See the error log for additional details."}');
  });
});

test('test passive enrollment', () => {
  client.settings.loginEnrollment = true;
  expect.assertions(3);
  return client.removeProfile(entityID, '', '').then(() => {
    return client.Login(entityID, 'jdG9EcIwDIbhWdjAsmT9tNDmoGUABqCh8/AcqazYHxenfU6v5TB3ZdVCodKUrfxOf/Xb1u9bf+7f43rhJXv/Z8Kys8/EJDGvIHpgAqJtZI0JTFuyeVqKamGwQpqmVM8wIzlzN6N2ZlNzA1EdmQf6p0s2RxMLRQ9iiVmA6JLN0ZFZaQGinhiMZuZo08RI0PPGyGpVED0wB9HMgpbRLw==');
  }).then(() => {
    return client.Login(entityID, 'jdMxDsIwDAXQs3CDuE6ceIW1gpUDcAAWthweiBji2F+0XTo8/Z98qcxdWCSRSm6Jcvo+/dEve7/u/T7e2/nEC6PBno7lmW1EIG1hG0hjy9pgL8eKYZ+vuHRh9cgV+DfIn1KudITlguYNmT+bYYUKKJWZSWJQGjJfWg1TBWmGjXHDNLGsgivYNMmANcMamjdk/myGNUbz6syUUenC0C9jmUpY+gY=');
  }).then(() => {
    return client.Login(entityID, 'jdJBDgIhDIXhs3iDQqGUrW4nuvUAHsCNOw4vGTWh0KfOJLP6wk9hmJuwCIUqmTQVof60Wztt7by16/5ejgeeWNnZ/TvL/GKPhSXD+sePumyN5pFJYLDaxBJYzUTlHV1HMKsVQpMapvTX3j7sx6SaFERlZDWhO50YutORVYJ3WgzLaFKXrVHDAjxeNSyiqMvWqGWKonVkse/Oj04sgqhhnPz/7Qk=');
  }).then(() => {
    return client.Login(entityID, 'jdJBEsIgDAXQs3gDQkggW912dOsBPIAbdxzeTh1HUvgV2L7Jz6dlrsqqgUyFjHMM66mPelnqdan37d7OJ94x3tjzmKX0Ya+OJcc0gNAdIxAqLZMoYNqQ9dNcqJQAKrhpSjTFzGZ2+7I/TbOi3bRlRdDzDlkfmltmjCp4ltA09SyDCuXH1l+SUOiQHVZYWZwLNfRNrWVUFOw2ZP1ujkUZh74B');
  }).then(() => {
    return client.Login(entityID, 'jdM7EgIhEATQs3gDmB9MqumWm3oAD2BixuG1iJhZ21pIX03TFDAPY7NS3ZTcvZfvGs9x28Z9G4+59+uFE/PJXv8Yl9J0sveBSWBeQWhiBEJ1ZVUFTEtMwbQQSoVBhTCNGDUNjInOnI2JzzTl5iDUViadQWhiAkIDU0VNW2ANPaSf7BjaV2aC7i0xVCGEmlZQIUxrJID5ynpFTRNDXyayqY6hHw==');
  }).then(() => {
    return client.Login(entityID, 'jdKxEcIwDAXQWdhAlmTZaqHNkZYBGICGzsOTCwWWZZ1J2nf/fzshakIikFQyac0Jjqc9221r9609zne/XmhgeLKXY9wzhRKkTZlPM6WKdLK3Y9kwwaB0YLQ+AgNgWZcejP/YxpAY1tt+zG8zDIGDUjFMo68wsBqUGkZFg9JiWFg6sKi09oylBmlT5tNMKRcJjmDSMmLAtGff3222bcr8Nst0fr0f');
  }).then(() => {
    return client.Login(entityID, 'jdIxEgIxCEDRs3gDCISEVtsdbT2AB7Cx4/A6sQkGxmTbN/xlEiITEgFUqRWKKnyOPexy2PWw+/hu5xM5RjCOPf8wGdBeC2PHWhYN2RqtM2OmZFrI1mkuyorJCm5aRd5hgrDzb4K4s6lIS6Iys/atBtEfVpKoY51LEm2O1exOPZPsITmmWJNod4yyTUO2Rj3TLKoTQ9CeREO2Rh3DFj+kNw==');
  }).then(() => {
    return client.Login(entityID, 'jdK7DQMhDIDhWbIB+E2btKekzQAZIE06hs+JCp+xBLSf+LEAsQuKlNqEpTat5Vz90x9Hfx79PfbrfsMLg8G+gdHEoIgmpy1ZPA0dUxrsFxjPrEI2woVtjVDVdqJQYIsZ7twNjJK7OYYkSVRmRlyS6JLFqGMM2aTqGFMSXbIYdez8cUnUHENJoheW/TfPTJNom5k2TqJLFqOOGa/f9A8=');
  }).then(() => {
    return client.Login(entityID, 'jdGxDQMhDAXQWbIB2GDsNmlPuTYDZIA06Rg+6CoMfAWQqJ7+twVzFRYJ0SSXINFCO/VdH0d9HvV13fN+Y88oXuzzh5le7Dux1LNCAkqXbC7NjhUFaUs2p7lSTQxWcGkqssOMt2Yzto1N2xeg2cQxQ6UDQ6WOtReUlp5RJFC6ZHOpOqYM0gaWQJovNQIruDQWxKxnKUUw28DQpo5lWpf+AA==');
  }).then(() => {
    return client.Login(entityID, 'jdFBDgIhDAXQs3gDaGlpt7qdOFsP4AHcuOPwGhITYPgOsH35vwXmoqwaoqsYmVr4nvIst63ct/Kod79eeGBe2es/c46VvQ8sdSyj0oGhUmkYB2aQNrAE0lLHzMAKXVokWmKeVmb7sZNNSRyUastYCZQOjEFpblmSANKm7JimPUPPay0TQn86ZScrCK2VugDmLVOPYLYpO87WsZzytPQD');
  }).then(() => {
    return client.Login(entityID, 'jdMxEgIhDAXQs3iDhJBAWm13tPUAHsDGjsPrUDgb4O8stG/ySQCRZmJG7Kaeihj9Vnu129buW3v2/bheZGC1s/cxq5Q6+0wsByYZhA5MQagG5gSqLdlcLYS6MGghVPNCJ5iQ+omz/dlxp8JsINT2LDEayMAYhEbmaCBlz4TRnS7ZHFoDq+hZDgw9yxjqGbQQqmVD4/U904LudMnmswVmuv4yXw==');
  }).then(() => {
    return client.Login(entityID, 'jdI9DsMgDAXgs/QGOP4Br+0aNWsP0AN06cbhG0UZMPCqEInp03t2BHM1Nkvk+yWZLe2nvutjrc+1vo5vu994yj7/WaF0sO/AJDAhUNoxBqXaMicBaR1TkBZKPRNYIaa5XmCail+YTZPThU2VJINSa9kiCyidsrE0MOYFlObAztnG0o4VUFpaJudDGtM6hv5bjszBCjGtCGDeMjUGs03ZOFtgxvOH9AM=');
  }).then(() => {
    return client.Login(entityID, 'jdI9EgIhDAXgs3gDQv5Iq+2Oth7AA9jYcXidrQi7bwTab/LyGJi7sVmhMCOR2srv9Fe/bf2+9ed+H9cLZ8ZlZ+8/LGJnnwOTkSlXEHrKjqGaWDCYNjEB01KoaQEV0jRzXWHuZWU3d1pp2qqDUBtZVAKhE0PP6wPTQqjCxFAFywz9kJZYQz9kYrxUIWgllFQAi5FVFrDbxBTslhjTeegX');
  }).then(() => {
    return client.Login(entityID, 'jdKxEcMgDIXhWbIBQiCkNml9cZsBMoAbdwyfHJcCAe9iu/1OP8JmrsIigUwkpsA5fJ/6ro+tPrf6au9+v/HASmPHH2ba2Dmx1DNKDKIDyyCaexYpgGkDIzDNRaMUsIKfZuEKY5UrZ2NF1+tY+n2sOSo9yxFd75LNUc8MRUvPhBREl2yOqmNKYNrA0Ao+qgZWcNNKRptazxT+vUs2n80xo3X0Aw==');
  }).then(() => {
    return client.Login(entityID, 'jdJBDgIhDAXQs3iDQmmhW91OnK0H8ABu3HF4DdGEwvwMsH35vw0wV2VVCqbKzBToe+qz3rZ63+qj3f164YHFxl4nzKSx98RSz1LrPCodWACl4liOIG1gDNJcqTCBFVyaaFxhmpZm+7OTTTNlUKo9K2Sg1LPfK8yl2bGC0jwzlOZLrYAVSs8sox8yMPRDsme2UJpIAmDWsyAJzHbI5tkci+G49AM=');
  }).then(() => {
    return client.Login(entityID, 'jdGxDQMhDAXQWbKBwWDjNmlPSZsBMkCa6xj+TqdEAmwLoH3y/wbESkgEQUhQMEY4T/3Ux1afW31f93W/ocm+iqWWJQjONJPpadgzudiuWO5YASfUZJMVcsoroZlhhRHjSrc/0906xtF7EGpZQe9PB+aFcsskeCsMLDnTulCJ3ruVjjE7oSabrVDiPPSs//sFzaRlAcnpNjC72wE=');
  }).then(() => {
    return client.evaluateProfile(entityID, 'jdJBEsIgDAXQs3gDQkggW912dOsBPIAbdxzeTh1HUvgV2L7Jz6dlrsqqgUyFjHMM66mPelnqdan37d7OJ94x3tjzmKX0Ya+OJcc0gNAdIxAqLZMoYNqQ9dNcqJQAKrhpSjTFzGZ2+7I/TbOi3bRlRdDzDlkfmltmjCp4ltA09SyDCuXH1l+SUOiQHVZYWZwLNfRNrWVUFOw2ZP1ujkUZh74B');
  }).then(resp => {
    expect(resp.Confidence).toBe('98');
    expect(resp.Fidelity).toBe('72');
    expect(resp.Profiles).toBe('15');
  });
});