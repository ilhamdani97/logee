import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NavSider from '../NavSider';


describe('src/pages/NavSider', () => {
  const data = {
    'name': 'Logee Port',
    'to': '/',
    'icon': {}
  };
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<NavSider data={data}/>);
    expect(tree).toMatchSnapshot();
  });
});
