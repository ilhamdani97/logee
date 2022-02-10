import React, { useContext } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DashboardMenu from '../DashboardMenu';



describe('src/components/elements/DashboardMenu', () => {
  test('render', () => {
    useContext.mockImplementation(() => {
      return {
        router: 'jict',
        showMenu:true
      };
    });
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DashboardMenu />);
    const logout = tree.props.children.props.children[1].props;
    logout.onClick();
  });

  test('render no root', () => {
    useContext.mockImplementation(() => {
      return {
        router: '',
        showMenu:true
      };
    });
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DashboardMenu />);
    const logout = tree.props.children.props.children[1].props;
    logout.onClick();
  });
  test('render production', () => {
    useContext.mockImplementation(() => {
      return {
        router: 'jict',
        showMenu:true
      };
    });
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DashboardMenu />);
    const logout = tree.props.children.props.children[1].props;
    logout.onClick('production');
  });

  test('render staging', () => {
    useContext.mockImplementation(() => {
      return {
        router: 'jict',
        showMenu:true
      };
    });
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DashboardMenu />);
    const logout = tree.props.children.props.children[1].props;
    logout.onClick('staging');
  });

  test('render development', () => {
    useContext.mockImplementation(() => {
      return {
        router: 'jict',
        showMenu:true
      };
    });
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DashboardMenu />);
    const logout = tree.props.children.props.children[1].props;
    logout.onClick('development');
  });
});
