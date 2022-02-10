import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconDashboard from '../IconDashboard';

const { defaultProps } = IconDashboard.type;

jest.mock('../../../../utils/unit', () => ({
  autoPx: v => v,
}));

describe('src/components/elements/IconDashboard', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconDashboard {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
