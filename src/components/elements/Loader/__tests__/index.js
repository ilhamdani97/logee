import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Loader from '../Loader';

const { defaultProps } = Loader.type;

describe('src/components/elements/Loader', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Loader {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
