import React from 'react';
import styles from './styles.scoped.css';
import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'logeeport-ui';

const ContentGmv = ({ data }) => {
  return (
    <div className={styles.root}>
      <Row className={styles.footer} justify="space-between">
        <Col xs="4">
          <Typography className={styles.subCaption}>
            {data.title}
          </Typography>
        </Col>
        <Col className={styles.totalHarga} xs="4">{data.total}</Col>
      </Row>
    </div>
  );
};

ContentGmv.defaultProps = {
  data:{},
};

ContentGmv.propTypes = {
  data:PropTypes.object,
};


export default ContentGmv;
