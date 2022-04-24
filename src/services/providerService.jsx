/** @format */

import http from './httpService';
import config from '../config/config.json';

const apiEndpoint = process.env.REACT_APP_API_URL + config.apiProvider;

export function getProviders() {
  return http.get(apiEndpoint);
}
