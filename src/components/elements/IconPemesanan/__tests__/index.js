import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconPemesanan from '../IconPemesanan';

const { defaultProps } = IconPemesanan.type;

jest.mock('../../../../utils/unit', () => ({
  autoPx: v => v,
}));

describe('src/components/elements/IconPemesanan', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconPemesanan {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
