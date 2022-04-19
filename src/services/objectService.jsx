/** @format */

import http from './httpService';
import config from '../config/config.json';

export function getObjecttypes() {
  return http.get(config.apiEndpoint + config.apiObjectType);
}
