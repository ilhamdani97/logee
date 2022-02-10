import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Typography } from 'logeeport-ui';
import styles from './styles.scoped.css';

const SimpleSection = ({ title,className,children }) => {
  return (
    <Row className={[styles.root,className].join(' ')}>
      <Col className={styles.noPadSide} xs="12">
        <Typography className={styles.title} variant="h5">{title}</Typography>
      </Col>
      <Fragment>
        {children}
      </Fragment>
    </Row>);
};

SimpleSection.defaultProps = {
  children:null,
  className: '',
  title : '',


};

SimpleSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title : PropTypes.string,
};


export default SimpleSection;
