import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavSider from '../NavSider';
import ExpandSider from '../ExpandSider';
import styles from './styles.scoped.css';

const SideBar = ({ data }) => {
  return (
    <nav className={styles.nav}>
      {data.map((nav, idx) => (
        <Fragment key={idx}>
          {nav.children ?
            <ExpandSider data={nav} index={idx}/> :
            <NavSider data={nav} key={idx} />
          }
        </Fragment>
      ))}
    </nav>
  );
};

SideBar.defaultProps = {
  data: [],
};

SideBar.propTypes = {
  data: PropTypes.array,
};


export default SideBar;
