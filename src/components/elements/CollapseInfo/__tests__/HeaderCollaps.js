import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HeaderCollaps from '../HeaderCollaps';

const data =  {
  'title': 'Armada',
  'subTitle': 'Total armada berdasarkan jenis dan kapasitasnya pada periode waktu yang dipilih.',
  'total': '24'
};
describe('src/components/elements/HeaderCollaps', () => {

  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<HeaderCollaps data={data}/>);
    expect(tree).toMatchSnapshot();
  });
});
