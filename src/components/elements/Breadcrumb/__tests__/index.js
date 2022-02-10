import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Breadcrumb from '../Breadcrumb';

const breadCrumbProps = [
  {
    name: `impor`,
    location: `/${'jict'}/listingordertruck?${'type=EXPORT'}`,
  },
  {
    name: 'List Pesanan Truk',
    location: `/${'jict'}/listingordertruck?${'type=EXPORT'}`,
  },
];

describe('src/components/elements/Breadcrumb', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Breadcrumb paths={breadCrumbProps} />);
    expect(tree).toMatchSnapshot();
  });
});
