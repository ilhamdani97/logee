import React from 'react';
import styles from './styles.scoped.css';
import PropTypes from 'prop-types';
import compareProps from '../../../utils/compareProps';
import { Link } from 'react-router-dom';

function Breadcrumb({ paths }) {
  return (
    <section className={styles.root}>
      <ul>
        {paths && paths.map((path, idx) => {
          if(idx === 0){
            return (
              <li key={idx}>
                <Link to={path.location}>
                  {path.name}
                </Link>
              </li>
            );
          } else {
            return (
              <React.Fragment key={idx}>
                <span>/</span>
                <li>
                  <Link to={path.location}>
                    {path.name}
                  </Link>
                </li>
              </React.Fragment>
            );
          }
        })}

      </ul>
    </section>
  );
}

export default React.memo(Breadcrumb, compareProps);

Breadcrumb.defaultProps = {
  paths: []
};

Breadcrumb.propTypes = {
  paths: PropTypes.array
};
