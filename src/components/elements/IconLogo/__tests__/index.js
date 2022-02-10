import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconLogo from '../IconLogo';

const { defaultProps } = IconLogo.type;

jest.mock('../../../../utils/unit', () => ({
  autoPx: v => v,
}));

describe('src/components/elements/IconLogo', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconLogo {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
