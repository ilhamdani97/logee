import { useCookie } from 'logeeport-ui';

const EXPIRE_TIME_STORAGE = 'logee-transportation_expire_time';
const TOKEN_STORAGE = 'logee-transportation_access_token';
const USER_DATA_STORAGE = 'logee-transportation_user_data';
const USER_ROLE = 'logee-transportation_user_role';
const COMPANY_ID = 'logee-transportation_company_id';
const COMPANY_NAME = 'logee-transportation_company_name';

export function setToken(value) {
  localStorage.setItem(TOKEN_STORAGE, value);
}

export function getToken() {
  return localStorage.getItem(TOKEN_STORAGE);
}

export function setRole(value) {
  localStorage.setItem(USER_ROLE, value);
}

export function getSessionId() {
  return useCookie.getCookie('userLoginKoja')?
    JSON.parse(useCookie.getCookie('userLoginKoja')).sessionId
    :null;
}

export function getRole() {
  const role = localStorage.getItem(USER_ROLE);
  return role ? role.split(',') : [];
}

export function setCompanyId(value) {
  localStorage.setItem(COMPANY_ID, value);
}

export function getCompanyId() {
  return localStorage.getItem(COMPANY_ID);
}

export function setCompanyName(value) {
  localStorage.setItem(COMPANY_NAME, value);
}

export function getCompanyName() {
  return localStorage.getItem(COMPANY_NAME);
}

export function clearStorages() {
  localStorage.removeItem(TOKEN_STORAGE);
  localStorage.removeItem(EXPIRE_TIME_STORAGE);
  localStorage.removeItem(USER_DATA_STORAGE);
  localStorage.removeItem(USER_ROLE);
  localStorage.removeItem(COMPANY_ID);
  localStorage.removeItem(COMPANY_NAME);
}

export function setExpireTime(value) {
  localStorage.setItem(EXPIRE_TIME_STORAGE, value * 1000);
}

export function checkExpireTime() {
  const time = new Date().getTime();
  const expire = localStorage.getItem(EXPIRE_TIME_STORAGE) || 0;

  return time > expire;
}

export function setUserData(value) {
  localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(value));
}

export function getUserData() {
  const retval = localStorage.getItem(USER_DATA_STORAGE);

  return JSON.parse(retval);
}


export function getTokenCookie() {
  return useCookie.getCookie('accessToken');
}

export function getsingleRoute() {
  return JSON.parse(useCookie.getCookie('userLogin')).singleRoute;
}
