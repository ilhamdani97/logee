import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ChartDonatPort from '../ChartDonatPort';

const data =  [
  {
    'name': 'totalOnProcess',
    'value': 0
  },
  {
    'name': 'totalOnConfirm',
    'value': 2
  },
  {
    'name': 'totalOnDelivery',
    'value': 1
  },
  {
    'name': 'totalDone',
    'value': 11
  },
  {
    'name': 'totalExpired',
    'value': 0
  }
];

const colors =  [
  '#FAB005',
  '#56C281',
  '#064C6F',
  '#8DD4F7',
  '#DE1B1B'
];

describe('src/components/elements/ChartDonatPort', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ChartDonatPort colors={colors} data={data}/>);
    expect(tree).toMatchSnapshot();
  });
});
