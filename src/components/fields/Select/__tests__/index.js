import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Select from '../Select';

describe('src/components/fields/Select', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Select
        options={[{ text: '', value: '' }]}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  test('error message', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Select
        meta={{
          error: 'error',
          touched: true,
        }}
      />
    );
    expect(tree.props.children[2].props.children).toBe('error');
  });
});
