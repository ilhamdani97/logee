import React, { useState } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Password from '../Password';

describe('src/components/fields/Password', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Password {...Password.type.defaultProps} />);
    expect(tree).toMatchSnapshot();

    tree.props.children[1].props.children[1].props.onClick();
  });
  test('render with show password', () => {
    useState.mockImplementationOnce(v => [!v, jest.fn]);
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Password {...Password.type.defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
