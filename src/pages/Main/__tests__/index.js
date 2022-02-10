import React from 'react';
import { useSelector } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import Main from '../Main';

describe('src/pages/Main', () => {
  test('render', () => {
    useSelector.mockImplementation((fn) => {
      fn({});
      return {
        data:{
          'fetchChartProforma': {
            'success': true,
            'data': {
              'period': 'yearly',
              'year': 2021,
              'month': '-',
              'week': '-',
              'date': '-',
              'averageContainer': 3.9166666666666665,
              'averageTransaction': 2812512994.1666665,
              'chart': [
                {
                  'periodNodeId': 1,
                  'periodNode': 'Jan',
                  'totalTransaction': 967522920,
                  'totalContainer': 1
                },

              ]
            },
            'message': 'Your Request Has Been Processed',
            'code': 200,
            'statusCode': '2000'
          },
          'fetchExportImport': {
            'success': true,
            'data': {
              'period': 'yearly',
              'year': 2021,
              'month': '-',
              'week': '-',
              'date': '-',
              'averageTransactionExport': 1706852.5,
              'averageTransactionImport': 2810806141.6666665,
              'chart': [
                {
                  'totalTransactionExport': 0,
                  'totalTransactionImport': 967522920,
                  'periodNodeId': 1,
                  'periodNode': 'Jan',
                  'totalTransactionAll': 967522920
                },
              ]
            },
            'message': 'Your Request Has Been Processed',
            'code': 200,
            'statusCode': '2000'
          },
          'fetchPesananTruck': {
            'success': true,
            'data': {
              'period': 'yearly',
              'year': 2021,
              'month': '-',
              'week': '-',
              'date': '-',
              'averageOrderCount': 5.416666666666667,
              'averageTransaction': 9194735.916666666,
              'chart': [
                {
                  'periodNodeId': 1,
                  'periodNode': 'Jan',
                  'totalTransaction': 7500000,
                  'totalOrderCount': 3
                },

              ]
            },
            'message': 'Your Request Has Been Processed',
            'code': 200,
            'statusCode': '2000'
          },
          'fetchDashboardOrders': {
            'success': true,
            'data': {
              'from': '2021-12-26T17:00:00.000Z',
              'to': '2021-12-27T16:59:59.999Z',
              'latestUpdate': '2021-12-27T08:03:32.603Z',
              'totalOnProcess': 0,
              'totalOnConfirm': 0,
              'totalOnDelivery': 0,
              'totalDone': 0,
              'totalExpired': 0,
              'totalOrders': 0,
              'percentageOnProcess': 0,
              'percentageOnConfirm': 0,
              'percentageOnDelivery': 0,
              'percentageDone': 0,
              'percentageExpired': 0
            },
            'message': 'Your Request Has Been Processed',
            'code': 200,
            'statusCode': '2000'
          },
          'fetchDashboardProforma': {
            'success': true,
            'data': {
              'from': '2021-12-26T17:00:00.000Z',
              'to': '2021-12-27T16:59:59.999Z',
              'latestUpdate': '2021-12-27T08:03:32.545Z',
              'totalPaid': 0,
              'totalUnpaid': 0
            },
            'message': 'Your Request Has Been Processed',
            'code': 200,
            'statusCode': '2000'
          },
          'fetchDashboardGmv': null
        }
      };
    });
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Main />);
    expect(tree).toMatchSnapshot();
  });
});
