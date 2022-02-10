import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconOperational from '../IconOperational';

const { defaultProps } = IconOperational.type;

jest.mock('../../../../utils/unit', () => ({
  autoPx: v => v,
}));

describe('src/components/elements/IconOperational', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconOperational {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
