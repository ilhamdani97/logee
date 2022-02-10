import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ResetPassword from '../ResetPassword';
import { useSelector } from 'react-redux';

useSelector.mockImplementation(fn => {
  fn({});
  return {
    isLoading:false,
    message: 'test'
  };
});

describe('src/components/forms/ResetPassword', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ResetPassword />);
    expect(tree).toMatchSnapshot();
    // useSelector.mockImplementationOnce(() => ({ isLoading: true, message: 'error' }));
    // ResetPassword.defaultProps.handleSubmit();
  });
});
