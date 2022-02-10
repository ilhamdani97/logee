import React from 'react';
import PropTypes from 'prop-types';
import { autoPx } from '../../../utils/unit';
import compareProps from '../../../utils/compareProps';

function IconCompany({ fill }) {
  const r24 = autoPx(24);
  const d = `M17 11V3H7V7H3V21H11V17H13V21H21V11H17ZM7 19H5V17H7V19ZM7
  15H5V13H7V15ZM7 11H5V9H7V11ZM11 15H9V13H11V15ZM11 11H9V9H11V11ZM11
  7H9V5H11V7ZM15 15H13V13H15V15ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM19
  19H17V17H19V19ZM19 15H17V13H19V15Z`;

  return (
    <svg fill="none" height={r24} viewBox="0 0 24 24" width={r24} xmlns="http://www.w3.org/2000/svg">
      <path d={d} fill={fill} />
    </svg>
  );
}

export default React.memo(IconCompany, compareProps);

IconCompany.defaultProps = {
  fill: '#25282B',
};

IconCompany.propTypes = {
  fill: PropTypes.string,
};
