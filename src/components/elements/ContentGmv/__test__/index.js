import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ContentGmv from '../ContentGmv';

const data =  {
  'title': 'Armada',
  'total': '24'
};

describe('src/components/elements/CollapseInfo', () => {

  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ContentGmv data={data}/>);
    expect(tree).toMatchSnapshot();
  });
});
