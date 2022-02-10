import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TrackingStatus from '..';

describe('src/components/elements/TrackingStatus', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<TrackingStatus code="10" destinationCount= ""/>);
    expect(tree).toMatchSnapshot();
  });
});
