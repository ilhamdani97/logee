import { CLEAR_MESSAGE, DATA_FETCHED, FAILED, LOADING } from '../constants';
import reducer from '../reducer';

describe('src/pages/Min', () => {
  test('case DATA_FETCHED', () => {
    const result = reducer({}, { type: DATA_FETCHED, key: 'fetchDashboardOrders', data: 'tes' });
    expect(result.fetchDashboardOrders).toBe(undefined);
  });

  test('case FAILED', () => {
    const result = reducer({}, { type: FAILED, message: 'error' , key:'fetchDashboardOrders' });
    expect(result.message).toEqual({ 'fetchDashboardOrders': 'error' });
  });

  test('case LOADING', () => {
    const result = reducer({}, { type: LOADING, isLoading: true, key:'fetchDashboardOrders' });
    expect(result.isLoading).toEqual({ 'fetchDashboardOrders': true });
  });

  test('case CLEAR_MESSAGE', () => {
    const result = reducer({}, { type: CLEAR_MESSAGE, message: 'error' , key:'fetchDashboardOrders' });
    expect(result.message).toEqual({ 'fetchDashboardOrders': 'error' });
  });

});
