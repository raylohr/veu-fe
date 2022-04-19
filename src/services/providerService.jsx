import http from './httpService';
import config from '../services/config.json';

const apiEndpoint = config.apiEndpoint + '/provider/';
console.log('apiEndpoint', apiEndpoint);

export function getProviders() {
  return http.get(apiEndpoint);
}
