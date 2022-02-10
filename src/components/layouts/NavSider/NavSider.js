import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import styles from './styles.scoped.css';

const NavSider = ({ data }) => {
  const { pathname } = useLocation();
  const isActive = data.to === pathname.toLowerCase();

  return (
    <>
      <Link className={isActive ? styles.active : ''} to={data.to}>
        <section className={styles.menuSection}>
          <data.icon />
          {data.name}
        </section>
      </Link>
    </>
  );
};

NavSider.defaultProps = {
  data: {},
};

NavSider.propTypes = {
  data: PropTypes.object,
};
export default NavSider;
