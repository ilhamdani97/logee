import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Timeline from '../Timeline';

const { defaultProps } = Timeline.type;

jest.mock('../../../../utils/constants', () => ({
  STATUS_DELIVERY_MESSAGE: {
    1: { label: 'Menunggu Konfirmasi', icon: 'ic-hourglass' }
  },
}));

jest.mock('../../../../utils/storage', () => ({
  getToken: () => ''
}));

describe('src/components/elements/Timeline', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Timeline {...defaultProps} code="1" />);
    expect(tree).toMatchSnapshot();
  });

  test('render with props', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Timeline
        {...defaultProps}
        code="1"
        date={'2020-11-24'}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
