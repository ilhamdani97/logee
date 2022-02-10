import fetch, { getUrl, BEARER_AUTH } from '../utils/fetch';

const BASE_URL = getUrl([
  'https://api.logeetrans.com/inbox',
  'https://stage-api.logeetrans.com/inbox',
  'http://logee-core.apps-stage.k3s-1-logee.playcourt.id/inbox',
  'https://dev-api.logeetrans.com/inbox'
]);

const emptyValue = '';

export const listNotifikasi = () => (
  fetch(`${BASE_URL}/v2/notification`, 'get', { headers: BEARER_AUTH })
);

export const listMessages = (keyword, query) => (
  fetch(`${BASE_URL}/v1/messages?limit=10&sort=1${keyword || emptyValue}${query || emptyValue}`, 'get', { headers: BEARER_AUTH })
);
