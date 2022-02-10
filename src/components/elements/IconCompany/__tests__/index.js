import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconCompany from '../IconCompany';

const { defaultProps } = IconCompany.type;

jest.mock('../../../../utils/unit', () => ({
  autoPx: v => v,
}));

describe('src/components/elements/IconCompany', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconCompany {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
