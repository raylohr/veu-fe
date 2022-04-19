/** @format */

import http from './httpService';
import config from '../config/default.json';

const apiEndpoint = config.apiEndpoint + '/provider/';
console.log('apiEndpoint', apiEndpoint);

export function getProviders() {
  return http.get(apiEndpoint);
}
