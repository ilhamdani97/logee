import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ResetPasswordConfirm from '../ResetPasswordConfirm';
import { useSelector } from 'react-redux';

useSelector.mockImplementation(fn => {
  fn({});
  return {
    isLoading:false,
    message: 'test'
  };
});

describe('src/components/forms/ResetPasswordConfirm', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ResetPasswordConfirm />);
    expect(tree).toMatchSnapshot();
  });
});
