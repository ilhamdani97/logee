import { fetchUserList } from '../../services/user';
import { fetchDashboardGmv } from '@services/dashboard';

import { DATA_FETCHED, LOADING, FAILED } from './constants';

export const API = {
  fetchUserList,
  fetchDashboardGmv
};

export const TYPES = {
  DATA_FETCHED, LOADING, FAILED
};

