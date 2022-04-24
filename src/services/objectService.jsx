/** @format */

import http from './httpService';
import config from '../config/config.json';

export function getObjecttypes() {
  return http.get(process.env.REACT_APP_API_URL + config.apiObjectType);
}
