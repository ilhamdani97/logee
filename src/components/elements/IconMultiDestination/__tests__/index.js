import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconMultiDestination, { IconMultiDestinationString } from '../IconMultiDestination';

const { defaultProps } = IconMultiDestination.type;

describe('src/components/elements/IconMultiDestination', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconMultiDestination {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });

  test('render string', () => {
    const icon = IconMultiDestinationString(0);
    expect(icon).toMatchSnapshot();
  });
});
