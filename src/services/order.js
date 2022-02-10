import fetch, { BEARER_AUTH, getUrlEcologee, getUrlLGT, getUrlLogeetrans  } from '../utils/fetch';
export const LOGEETRANS_URL = getUrlLogeetrans();

const ECOLOGEE_URL = getUrlEcologee();
const LGT_URL = getUrlLGT();



export const fetchOrderTruck = (_,query) => (
  fetch(`${ECOLOGEE_URL}/portal/v1/cargo/drop-down${query}`, 'get', { headers: BEARER_AUTH })
);
export const fetchOrderDetailTruck = (_,query) => (
  fetch(`${ECOLOGEE_URL}/portal/v2/order/${query}`, 'get', { headers: BEARER_AUTH })
);



export const fetchOrderTrucks = `${ECOLOGEE_URL}/portal/v1/cargo/drop-down`;
export const fetchSuggestArmada = `${LGT_URL}/cargo/v2/vehicle-group/suggestion`;
export const fetchDetailCargo = `${ECOLOGEE_URL}/portal/v1/cargo`;


