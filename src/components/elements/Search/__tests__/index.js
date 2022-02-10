import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Search from '../Search';

describe('src/components/fields/Search', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Search
      changeKeyword={jest.fn}
      handleSubmit={jest.fn}
      keyword="keyword"
    />);
    expect(tree).toMatchSnapshot();
    const inputField = tree.props.children.props.children.props.children[0];
    tree.props.children.props.onSubmit({
      preventDefault: jest.fn()
    });
    inputField.props.onChange({
      target: {
        value: ''
      }
    });
    Search.defaultProps.handleSubmit();
    Search.defaultProps.changeKeyword();
  });
});
