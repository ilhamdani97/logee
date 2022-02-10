
import fetch, { getUrlLogee, BEARER_AUTH, getUrlEcologee  } from '../utils/fetch';

const LOGEETRANS_URL = getUrlLogee([
  'https://api.logeetrans.com',
  'https://stage-api.logeetrans.com',
  'http://logee-transport.apps-stage.k3s-1-logee.playcourt.id',
  'https://dev-api.logeetrans.com'
]);

const ECOLOGEE_URL = getUrlEcologee();

export const fetchListingProforma = async (_,data) => (
  fetch(`${ECOLOGEE_URL}/portal/v1/koja/proforma?cargoType[]=JICT&${data}&limit=10`,'get',  { headers: BEARER_AUTH })
  // fetch(`https://run.mocky.io/v3/701a69e5-db05-4686-ac8a-fa5f7b2548c3`,'get',  )
);


export const downloadProforma = `${LOGEETRANS_URL}/billing/v1/logee-port/proformaDetails/export`;
