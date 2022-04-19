/** @format */

import http from './httpService';
import config from './config.json';

export function getObjecttypes() {
  return http.get(config.apiEndpoint + '/objecttype/')
}

