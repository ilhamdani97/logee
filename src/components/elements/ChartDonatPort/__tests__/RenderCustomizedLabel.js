import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RenderCustomizedLabel from '../RenderCustomizedLabel';

describe('src/components/elements/RenderCustomizedLabel', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<RenderCustomizedLabel />);
    expect(tree).toMatchSnapshot();
  });
});
