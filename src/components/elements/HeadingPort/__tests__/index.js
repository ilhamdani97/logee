import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HeadingPort from '../HeadingPort';

describe('src/components/elements/HeadingPort', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<HeadingPort/>);
    expect(tree).toMatchSnapshot();
  });
});
