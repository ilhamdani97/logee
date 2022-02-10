import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconButton from '../IconButton';

describe('src/components/elements/IconButton', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconButton />);
    IconButton.defaultProps.onClick();
    expect(tree).toMatchSnapshot();

    const result = IconButton({ ...IconButton.defaultProps, icon: 'pict' });
    expect(result.props.children.type).toBe('img');
  });
});
