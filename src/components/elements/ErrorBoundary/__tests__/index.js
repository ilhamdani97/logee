import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ErrorBoundary from '../ErrorBoundary';


describe('src/components/elements/ErrorBoundary', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ErrorBoundary />);
    expect(tree).toMatchSnapshot();
  });

});
