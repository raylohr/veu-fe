/** @format */

import http from './httpService';
import config from '../config/config.json';

const apiEndpoint = config.apiEndpoint + config.apiProvider;
console.log('apiEndpoint', apiEndpoint);

export function getProviders() {
  return http.get(apiEndpoint);
}
