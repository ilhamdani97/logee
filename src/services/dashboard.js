import fetch, { BEARER_AUTH, getUrlEcologee  } from '../utils/fetch';


const ECOLOGEE_URL = getUrlEcologee();




export const fetchChartProforma = (_,query) => (
  fetch(`${ECOLOGEE_URL}/port-admin/v1/dashboard/proforma-container/chart?${query}`, 'get', { headers: BEARER_AUTH })
);

export const fetchExportImport = (_,query) => (
  fetch(`${ECOLOGEE_URL}/port-admin/v1/dashboard/import-export/chart?${query}`, 'get', { headers: BEARER_AUTH })
);

export const fetchPesananTruck = (_,query) => (
  fetch(`${ECOLOGEE_URL}/port-admin/v1/dashboard/orders/chart?${query}`, 'get', { headers: BEARER_AUTH })
);

export const fetchDashboardOrders = () => (
  fetch(`${ECOLOGEE_URL}/port-admin/v1/dashboard/orders`, 'get', { headers: BEARER_AUTH })
);

export const fetchDashboardProforma = () => (
  fetch(`${ECOLOGEE_URL}/port-admin/v1/dashboard/proforma`, 'get', { headers: BEARER_AUTH })
);

export const fetchDashboardGmv = () => (
  fetch(`${ECOLOGEE_URL}/port-admin/v1/dashboard/reports?period=yearly&year=2022`, 'get', { headers: BEARER_AUTH })
);
