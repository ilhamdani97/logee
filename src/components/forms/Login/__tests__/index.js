import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Login from '../Login';
import { useSelector } from 'react-redux';

useSelector.mockImplementation(fn => {
  fn({});
  return {
    login: {
      email: '',
      password: ''
    },
    message: 'test'
  };
});

describe('src/components/forms/Login', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Login />);
    expect(tree).toMatchSnapshot();
    useSelector.mockImplementationOnce(() => ({ isLoading: true, message: 'error' }));
    Login.defaultProps.handleSubmit();
  });
});
