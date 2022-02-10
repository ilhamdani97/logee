import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SectionLogee from '../SectionLogee';

describe('src/components/elements/SectionLogee', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<SectionLogee />);
    expect(tree).toMatchSnapshot();
  });
});
