import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DataTable, { TableHeader, TableRow } from '../DataTable';

const column = [
  { heading: 'Nama', value: 'name' },
  { heading: 'Email', value: 'email' },
  { heading: 'No. Handphone', value: 'phoneNumber' },
];

const data = [
  { name: 'Test', email: 'test@a.id', phoneNumber: '0811111111' },
  { name: 'Test', email: 'test@a.id', phoneNumber: '0811111111' },
];

describe('src/components/elements/DataTable', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DataTable column={column} data={data} />);
    expect(tree).toMatchSnapshot();

    const result = DataTable({ ...DataTable.defaultProps, data: [], });
    expect(result.props.children[0].type).toBe('table');
    DataTable.defaultProps.handleClick();
  });

  test('render with children', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DataTable children={<div/>} column={column} data={data}/>);
    expect(tree).toMatchSnapshot();
    const tbody = tree.props.children[0].props.children[1];
    const row = tbody.props.children[1][0].props.children[0];
    row.props.handleClick();
  });

  test('TableHeader', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<TableHeader />);
    expect(tree).toMatchSnapshot();
  });

  test('TableRow', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<TableRow column={column} />);
    expect(tree).toMatchSnapshot();
    TableRow.defaultProps.handleClick();
  });
});
