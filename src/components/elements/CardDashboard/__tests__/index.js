import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CardDashboard from '../CardDashboard';


const data = {
  'title': 'Belum Dibayar',
  'toolTip': {
    'message': {
      'type': 'p',
      'key': null,
      'ref': null,
      'props': {
        'children': [
          'Total transaksi proforma pengurusan baru ',
          {
            'type': 'br',
            'key': null,
            'ref': null,
            'props': {},
            '_owner': null,
            '_store': {}
          },
          'dan perpanjangan yang belum dibayar PPJK'
        ]
      },
      '_owner': null,
      '_store': {}
    },
    'direction': 'left'
  },
  'content': 'Rp 0',
  'bgColor': 'red',
  'link': '/proforma?proformaDetailsStatus=CREATED'
};

const nolink = {
  'title': 'Belum Dibayar',
  'toolTip': {
    'message': {
      'type': 'p',
      'key': null,
      'ref': null,
      'props': {
        'children': [
          'Total transaksi proforma pengurusan baru ',
          {
            'type': 'br',
            'key': null,
            'ref': null,
            'props': {},
            '_owner': null,
            '_store': {}
          },
          'dan perpanjangan yang belum dibayar PPJK'
        ]
      },
      '_owner': null,
      '_store': {}
    },
    'direction': 'left'
  },
  'content': 'Rp 0',
  'bgColor': 'red',
};

describe('src/components/elements/CardDashboard', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<CardDashboard data={data}/>);
    expect(tree).toMatchSnapshot();
  });

  test('nolink', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<CardDashboard data={nolink}/>);
    expect(tree).toMatchSnapshot();
  });

});
