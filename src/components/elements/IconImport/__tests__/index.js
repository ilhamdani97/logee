import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconImport from '../IconImport';

describe('src/components/elements/IconImport', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconImport   />);
    expect(tree).toMatchSnapshot();
  });
});
