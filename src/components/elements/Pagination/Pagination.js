import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'querystring';
import { Link } from 'react-router-dom';
import styles from './styles.scoped.css';
import compareProps from '../../../utils/compareProps';
import { useQuery } from '../../../utils/format';

function Pagination(props) {
  const { className, location, meta } = props;
  const { page, totalPage } = meta;
  const classes = [styles.root, className].filter(Boolean).join(' ');
  const toPrevPage = {
    page: page ? (parseInt(page) - 1) : 1,
  };
  const toNextPage = {
    page: page ? (parseInt(page) + 1) : 2,
  };
  return (
    <section className={classes}>
      <IconArrow
        disabled={page === 1}
        icon="../../../assets/ic-chevron-left.svg"
        location={location}
        title="Prev Page"
        to={toPrevPage}
      />
      <PageNumber location={location} meta={meta} />
      <IconArrow
        disabled={page >= totalPage}
        icon="../../../assets/ic-chevron-right.svg"
        location={location}
        title="Next Page"
        to={toNextPage}
      />
    </section>
  );
}

export default React.memo(Pagination, compareProps);

Pagination.defaultProps = {
  className: '',
  location: {},
  meta: {},
};

Pagination.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object,
  meta: PropTypes.object,
};


export function IconArrow({ disabled, title, icon, to, location }) {
  return (
    <Link className={styles.icon} disabled={disabled} to={getLink(to, location)}>
      <img src={icon} title={title} />
    </Link>
  );
}

IconArrow.defaultProps = {
  disabled: false,
  icon: '',
  location: {},
  title: '',
  to: {},
};

IconArrow.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  location: PropTypes.object,
  title: PropTypes.string,
  to: PropTypes.object,
};

export function PageNumber({ meta, location }) {
  const { page, totalPage } = meta;
  let totalPages = totalPage || 0;
  totalPages = parseInt(totalPages);
  const length = totalPages > 4 ? 4 : totalPages;
  const mainPages = Array.from(Array(length).keys()).map(i => {
    if (totalPages < 4 || page === 1) {
      return i + 1;
    }
    if (page === totalPages || page === totalPages - 1) {
      return (totalPages - (3 - i));
    }
    return page + i - 1;
  });
  const leftPages = totalPages > 5 && mainPages[0] - 1 > 0 ? [1, '...'] : [];
  const rightPages = totalPages > 5 && totalPages - mainPages[1] > 2 ? ['...', totalPages] : [];
  const pages = leftPages.concat(mainPages, rightPages);

  return (
    pages.map((item, key) => {
      const activePage = page === item && styles.active;
      const pageClasses = [styles['page-number'], activePage].filter(Boolean).join(' ');
      const disabled = typeof item !== 'number';
      const query = {
        page: item,
      };
      return (
        <Link className={pageClasses} disabled={disabled} key={key} to={getLink(query, location)}>
          {item}
        </Link>
      );
    })
  );
}

PageNumber.defaultProps = {
  location: {},
  meta: {}
};


PageNumber.propTypes = {
  location: PropTypes.object,
  meta: PropTypes.object
};

export function getLink(query, location) {
  const { parse } = useQuery();
  return {
    pathname: location.pathname,
    search: `?${queryString.stringify({ ...parse, ...query })}`
  };
}
