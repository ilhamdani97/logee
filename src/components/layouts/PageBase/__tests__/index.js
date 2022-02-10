import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PageBase from '../PageBase';


describe('src/pages/PageBase', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<PageBase />);
    expect(tree).toMatchSnapshot();
  });
});
