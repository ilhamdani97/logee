import React, { useContext } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DashboardHeader from '../DashboardHeader';



describe('src/pages/DashboardHeader', () => {
  test('render', () => {
    useContext.mockImplementation(() => {
      return {
        setShowMenu: jest.fn(),
      };
    });
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DashboardHeader />);
    const showMenu = tree.props.children[1].props;

    showMenu.onClick();
  });

  test('render jict', () => {
    useContext.mockImplementation(() => {
      return {
        setShowMenu: jest.fn(),
        router:'jict'
      };
    });
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DashboardHeader />);
    const showMenu = tree.props.children[1].props;

    showMenu.onClick();
  });
});
