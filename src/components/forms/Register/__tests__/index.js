import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Register from '../Register';
import { useSelector } from 'react-redux';

useSelector.mockImplementation(fn => {
  fn({});
  return {
    isLoading:false,
    message: 'test'
  };
});

describe('src/components/forms/Register', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Register />);
    expect(tree).toMatchSnapshot();
  });
});
