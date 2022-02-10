import React,{ useEffect } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ChartBarPort from '../ChartBarPort';


const tooltip =  {
  'titleUpper': {
    'currency': false,
    'value': 'totalContainer',
    'subCaption': 'Kontainer',
    'tooltipColor': 'primary'
  },
  'titleBottom': {
    'currency': true,
    'value': 'totalTransaction',
    'subCaption': 'Transaksi',
    'tooltipColor': 'primary'
  }
};

const data = [
  {
    'periodNodeId': 1,
    'periodNode': 'Jan',
    'totalTransaction': 967522920,
    'totalContainer': 1,
    'yAxisUnit': 967,
    'xAxisBar': 0,
    'yAxisBar': 967,
    'yStacked': '0'
  }
];

const barType = 'stack';


describe('src/components/elements/ChartBarPort', () => {
  test('render', () => {
    useEffect.mockImplementationOnce(fn => fn());
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ChartBarPort data={data} tooltip={tooltip}/>);
    expect(tree).toMatchSnapshot();

    const barAction = tree.props.children.props.children.props.children[4].props;
    barAction.onMouseLeave();
    barAction.onMouseOver();
  });

  test('render bar stacj', () => {
    useEffect.mockImplementationOnce(fn => fn());
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ChartBarPort barType={barType} data={data} tooltip={tooltip}/>);
    expect(tree).toMatchSnapshot();

    const barAction =tree.props.children.props.children.props.children;
    const barActionAtas = barAction[4].props;
    const barActionBawah = barAction[5].props;

    barActionAtas.onMouseLeave();
    barActionAtas.onMouseOver();
    barActionBawah.onMouseLeave();
    barActionBawah.onMouseOver();
  });
});
