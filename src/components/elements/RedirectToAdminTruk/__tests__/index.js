import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RedirectToAdminTruk from '../RedirectToAdminTruk';


const handleClose = jest.fn();
const data = {
  deliveryDetailId:'24324324',
  orderNumber:'12121'
};

describe('src/components/elements/RedirectToAdminTruk', () => {
  test('render', () => {

    const shallow = new ShallowRenderer();
    const tree = shallow.render(<RedirectToAdminTruk data={data} onClose={handleClose} open={true} tipe="order" />);
    expect(tree).toMatchSnapshot();
  });
});
