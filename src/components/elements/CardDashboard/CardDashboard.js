import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.scoped.css';
import { Col, Row, Tooltip, Typography } from 'logeeport-ui';
import { Link } from 'react-router-dom';

const CardDashboard = ({ data }) => {
  const { content, title, toolTip,bgColor, link } = data;
  const { direction, message } = toolTip;

  const classes = [style.root,style[bgColor]].join(' ').trim();
  return (
    <Row className={classes}>
      <Col className={style.title} xs="8">
        {link ? <Link to={link}>{title}</Link> : title}</Col>
      <Col className={style.toolTips} xs="4">
        <Tooltip content={ToolTipMsg(message)} direction={direction}>
          <img src="/assets/ic-info.svg"/>
        </Tooltip>
      </Col>
      <Col className={style.content} xs="12">
        {
          link ?
            <Link className={style.linkArrow} to={link}>
              <Typography>{content}</Typography>
              <img src="/assets/ic-arrow-right.png"/>
            </Link> :
            <Typography >{content}</Typography>
        }
      </Col>
    </Row>
  );
};

const ToolTipMsg = (msg) => {
  return(
    <div className={style.tootlMsg}>
      {msg}
    </div>
  );
};

CardDashboard.defaultProps = {
  data: {},
};

CardDashboard.propTypes = {
  data: PropTypes.object,
};

export default CardDashboard;
