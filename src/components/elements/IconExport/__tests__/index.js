import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconExport from '../IconExport';

describe('src/components/elements/IconExport', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconExport   />);
    expect(tree).toMatchSnapshot();
  });
});
