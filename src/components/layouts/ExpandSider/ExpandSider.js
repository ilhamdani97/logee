import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import styles from './styles.scoped.css';

const ExpandSider = ({ data, index }) => {
  const [expand, setExpand] = useState({ active: -1, open: -1 });
  const clickExpand = (idx) => () => {
    setExpand({ ...expand, open: expand.open === idx ? -1 : idx });
  };
  const { length } = data.children;
  const { pathname,search } = useLocation();

  useEffect(() => {

    const indexSearch = search.split('&')[0];
    const activeChild = data.children.findIndex(i => i.to === pathname+indexSearch);

    setExpand({ open: expand.open, active: activeChild });
  }, [pathname, search]);

  return (
    <div className={styles['nav-item']} id={`sider-parent-${index}`}>
      <section onClick={clickExpand(index)}>
        <data.icon />
        {data.name}
      </section>
      <ul style={{ maxHeight: `${3 * length}rem` }}>
        {data.children.map((c, cIdx) => {
          const isActive = expand.active === cIdx;
          return (
            <li className={c.disabled ? styles.disable : ''} key={cIdx}>
              <Link className={(isActive && !c.disabled) ? styles.active : ''} to={c.to}>{c.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ExpandSider.defaultProps = {
  data: {},
  index: null,
};

ExpandSider.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default ExpandSider;


