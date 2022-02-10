import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ExpandSider from '../ExpandSider';


describe('src/pages/ExpandSider', () => {
  const data = {
    'name': 'Laporan',
    'icon': {},
    'children': [
      {
        'name': 'Pemesanan',
        'to': '/pemesanan'
      },
      {
        'name': 'Pembayaran',
        'to': '/pembayaran'
      },
      {
        'name': 'Penagihan',
        'to': '/penagihan'
      },
      {
        'name': 'Internal B2B',
        'to': '/internalB2B'
      }
    ]
  };
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ExpandSider data={data} index={1}/>);
    const expanded = tree.props.children[0].props;
    expanded.onClick();
  });

  test('render close', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ExpandSider data={data} index={-1}/>);
    expect(tree).toMatchSnapshot();
  });
});
