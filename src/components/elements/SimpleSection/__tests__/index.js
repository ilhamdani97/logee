import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SimpleSection from '../SimpleSection';

describe('src/components/elements/SimpleSection', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<SimpleSection title="asdasd"  />);
    expect(tree).toMatchSnapshot();
  });
});
