import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import IconUser from '../IconUser';

jest.mock('../../../../utils/unit', () => ({
  autoPx: v => v,
}));

describe('src/components/elements/IconUser', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<IconUser />);
    expect(tree).toMatchSnapshot();
  });
});
