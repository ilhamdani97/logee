import fetch, { BEARER_AUTH, BASIC_AUTH, getUrlLGT, getUrlEcologee } from '../utils/fetch';

const BASE_URL = getUrlLGT();
const ECOLOGEEURL = getUrlEcologee();


export const loginUser = data => (
  fetch(`${BASE_URL}/user/v1/port-admin/login`, 'post', data, { headers: BASIC_AUTH })
);

export const fetchUserList = (_,query) => (
  fetch(`${ECOLOGEEURL}/port-admin/v1/users?${query}`, 'get', { headers: BEARER_AUTH })
);




// export const dummy = (body,query) => (
//   fetch(`${ECOLOGEEURL}/port-admin/v1/users?${query}`, 'get', body, { headers: BEARER_AUTH })
// );

