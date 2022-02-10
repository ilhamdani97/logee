import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CustomTooltip from '../CustomTooltip';

const customProps =  {
  'titleUpper': {
    'currency': false,
    'value': 'totalOrderCount',
    'subCaption': {
      'textPosition': 'right',
      'textValue': 'Pesanan'
    },
    'tooltipColor': 'primary'
  },
  'titleBottom': {
    'currency': true,
    'value': 'totalTransaction',
    'subCaption': {
      'textPosition': 'right',
      'textValue': ''
    },
    'tooltipColor': 'primary'
  }
};

const payload = [{ 'fill':'#487A9D','dataKey':'yAxisBar','name':'yAxisBar','color':'#487A9D','value':0,'payload':{ 'totalTransactionExport':0,'totalTransactionImport':0,'totalTransactionAll':0,'periodNodeId':11,'periodNode':'Nov','yAxisUnit':0,'xAxisBar':0,'yAxisBar':0,'yStacked':0 } },{ 'fill':'#e8590c','dataKey':'xAxisBar','name':'xAxisBar','color':'#e8590c','value':0,'payload':{ 'totalTransactionExport':0,'totalTransactionImport':0,'totalTransactionAll':0,'periodNodeId':11,'periodNode':'Nov','yAxisUnit':0,'xAxisBar':0,'yAxisBar':0,'yStacked':0 } }];

describe('src/components/elements/CustomTooltip', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<CustomTooltip
      active={true}
      customProps={customProps}
      payload={payload}/>);
    expect(tree).toMatchSnapshot();
  });
});
