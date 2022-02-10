import React  from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SideBar from '../SideBar';

describe('src/components/elements/SideBar', () => {
  const data = [
    {
      'name': 'SSO Logee Port',
      'to': '/',
      'icon': {}
    },
    {
      'name': 'Dashboard',
      'to': '/jict',
      'icon': {}
    },
    {
      'name': 'Ekspor',
      'icon': {},
      'children': [
        {
          'name': 'List Proforma',
          'to': '/jict/listingproforma?type=EXPORT',
          'icon': {}
        },
        {
          'name': 'List Pesanan Truk',
          'to': '/jict/listingordertruck?type=EXPORT',
          'icon': {}
        },
        {
          'name': 'Order Detail',
          'to': '/jict/orderdetailtruck',
          'icon': {}
        },
        {
          'name': 'Order Truck',
          'to': '/jict/ordertruck',
          'icon': {}
        }
      ]
    },
    {
      'name': 'Impor',
      'icon': {},
      'children': [
        {
          'name': 'List Proforma',
          'to': '/jict/listingproforma?type=IMPORT',
          'icon': {}
        },
        {
          'name': 'List Pesanan Truk',
          'to': '/jict/listingordertruck?type=IMPORT',
          'icon': {}
        },
        {
          'name': 'Order Detail',
          'to': '/jict/orderdetailtruck',
          'icon': {}
        }
      ]
    }
  ];

  test('render ', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<SideBar data={data}/>);
    expect(tree).toMatchSnapshot();
  });


});
