import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CollapseInfo from '../CollapseInfo';

const header =  {
  'title': 'Armada',
  'subTitle': 'Total armada berdasarkan jenis dan kapasitasnya pada periode waktu yang dipilih.',
  'total': '24'
};
describe('src/components/elements/CollapseInfo', () => {

  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<CollapseInfo header={header}/>);
    expect(tree).toMatchSnapshot();
  });
});
