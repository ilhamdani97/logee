import axios from 'axios';
import { useCookie } from 'logeeport-ui';
import { clearStorages, getToken } from './storage';

export const BASIC_AUTH = { Authorization: 'Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ==' };
export const BEARER_AUTH = { Authorization: `Bearer ${getToken()}` };

const fetch = (url, method, param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2, param3)
      .then(res => resolve(res.data))
      .catch(err => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.'
        };
        if (err.response && err.response.data.message === 'Pengguna belum diaktivasi') {
          alert(err.response.data.message);
          clearStorages();
          useCookie.removeAllCookie();
          location.href = '/login';
        }
        else if (err.response && err.response.status === 403) {
          clearStorages();
          useCookie.removeAllCookie();
          location.href = '/login';
        }
        else if (!err.response) {
          reject(defaultError);
        } else if (!err.response.data) {
          reject(defaultError);
        } else {
          reject(err.response.data);
        }
      });
  });
};

export function getUrl(urls) {
  const mode = process.env.MODE;

  if (mode === 'production') {
    return urls[0];
  }

  if (mode === 'staging') {
    return urls[1];
  }

  if (mode === 'staging-flou') {
    return urls[2];
  }

  return urls[3];
}


export function getUrlLogee(urls) {
  const mode = process.env.MODE;

  if (mode === 'production') {
    return urls[0];
  }

  if (mode === 'staging') {
    return urls[1];
  }

  if (mode === 'staging-flou') {
    return urls[2];
  }

  return urls[3];
}


export function getUrlEcologee() {
  const logeeUrls = {
    local: 'https://dev-api.ecologee.id',
    development: 'https://dev-api.ecologee.id',
    staging: 'https://stage-api.ecologee.id',
    production: 'https://api.ecologee.id'
  };
  const mode = process.env.MODE;

  return logeeUrls[mode];
}

export function virtualServer() {
  const virtServer =`https://virtserver.swaggerhub.com/telkomdds/Logee-Trans-Port/1.0.0`;

  return virtServer;
}

export function getUrlLGT() {
  const logeeUrls = {
    local: 'https://dev-api.logeetrans.com',
    development: 'https://dev-api.logeetrans.com',
    staging: 'https://stage-api.logeetrans.com',
    production: 'https://api.logeetrans.com'
  };
  const mode = process.env.MODE;

  return logeeUrls[mode];
}

export function getUrlLogeetrans() {
  const url = {
    local: 'https://admin-dev.logeetrans.com',
    development: 'https://admin-dev.logeetrans.com',
    staging: 'https://admin-stage.logeetrans.com',
    production: 'https://admin.logeetrans.com'
  };
  const mode = process.env.MODE;

  return url[mode];
}

export default fetch;
