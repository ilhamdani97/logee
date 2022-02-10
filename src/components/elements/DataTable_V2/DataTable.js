import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';
import Loader from '../../elements/Loader';
import chevronRight from '../../../assets/chevron-right-black.svg';
import chevronActive from '../../../assets/chevron-active.svg';

export default function DataTable(props) {
  const {
    className,
    column,
    data,
    emptyDataHandler,
    meta,
    isLoading,
    handleClick,
    children,
    identifier
  } = props;
  const classes = [styles.root, className].filter(Boolean).join(' ');
  const [openedChildren, setOpenedChildren] = useState('');
  const _showHideChild = item => {
    const id = item[identifier];
    setOpenedChildren(prevState => prevState === id ? '' : id);
    handleClick(item);
  };

  return (
    <>
      <table className={classes}>
        <thead>
          <tr>
            {children ? <th /> : <th>No</th>}
            {column.map((item, idx) => <TableHeader item={item} key={idx} />)}
          </tr>
        </thead>
        <tbody>
          {isLoading &&
            <tr className={styles.loading}><td colSpan={column.length + 1}><Loader /></td></tr>
          }
          {!isLoading && data && data.map((item, idx) => (
            <React.Fragment key={idx}>
              <TableRow
                activeRow={openedChildren}
                children={children}
                className={item.className || ''}
                column={column}
                handleClick={children ? () => _showHideChild(item) : handleClick}
                identifier={identifier}
                idx={idx}
                item={item}
                meta={meta}
              />
              {(openedChildren === item[identifier]) && (
                <>
                  <tr className={styles['child-row']} rowSpan={2}>
                    <td colSpan={column.length + 2}>
                      <div>
                        {children}
                      </div>
                    </td>
                  </tr>
                  <tr className={styles['empty-row']}><td /></tr>
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {
        emptyDataHandler ?
          (data && !data[0]) &&
          emptyDataHandler :
          (data && !data[0]) &&
          <div className={styles.notFound}>
            <img src="../../assets/ic-not-found.svg" />
          </div>
      }
    </>
  );
}

DataTable.defaultProps = {
  children: null,
  className: '',
  column: [],
  data: [],
  emptyDataHandler: null,
  handleClick: () => { },
  identifier: 'id',
  isLoading: false,
  meta: {},
};

DataTable.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  column: PropTypes.array,
  data: PropTypes.array,
  emptyDataHandler: PropTypes.object,
  handleClick: PropTypes.func,
  identifier: PropTypes.string,
  isLoading: PropTypes.bool,
  meta: PropTypes.object
};

export function TableHeader({ item }) {

  return (
    <th className={styles['table-header']}>{item.heading}</th>
  );
}

TableHeader.defaultProps = {
  item: {},
};

TableHeader.propTypes = {
  item: PropTypes.object,
};

export function TableRow(props) {
  const {
    className,
    column,
    idx,
    item,
    meta,
    handleClick,
    children,
    activeRow,
    identifier
  } = props;
  const { page } = meta;
  const size = 10;
  let b = idx + 1;
  if (page > 1) {
    b = (idx + 1) + ((page - 1) * size);
  }
  return (
    <tr className={className} onClick={() => handleClick(item)}>
      {children ? (
        <td className={styles.arrow}>
          {activeRow === item[identifier] ? (
            <img src={chevronActive} />
          ) : (
            <img src={chevronRight} />
          )}
        </td>
      ) : <td>{b < 10 ? `0${b}` : b}</td>}
      {column.map((cItem, cIdx) => {
        const { value } = cItem;
        const newValue = typeof value === 'function' ? value(item, idx) : item[value];

        return (
          <td key={cIdx} title={newValue}>
            {newValue || '-'}
          </td>
        );
      })}
    </tr>
  );
}

TableRow.defaultProps = {
  activeRow: '',
  children: null,
  className: '',
  column: [],
  handleClick: () => { },
  identifier: '',
  idx: 0,
  item: {},
  meta: {}
};

TableRow.propTypes = {
  activeRow: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  column: PropTypes.array,
  handleClick: PropTypes.func,
  identifier: PropTypes.string,
  idx: PropTypes.number,
  item: PropTypes.object,
  meta: PropTypes.object,
};
