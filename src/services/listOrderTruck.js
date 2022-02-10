import fetch, { BEARER_AUTH, getUrlEcologee  } from '../utils/fetch';


const ECOLOGEE_URL = getUrlEcologee();


export const fetchListOrderTruck = async (_,query) => (
  fetch(`${ECOLOGEE_URL}/portal/v1/order?limit=10&${query}`, 'get', { headers: BEARER_AUTH })
);

