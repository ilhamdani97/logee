import React from 'react';
import PropTypes from 'prop-types';
import { autoPx } from '../../../utils/unit';
import compareProps from '../../../utils/compareProps';

function IconDashboard({ fill }) {
  const r24 = autoPx(24);
  const d1 = `M12.5953 5H19V9.45437H12.5953V5Z`;
  const d2 = `M5 13.3725H11.4047V5.001H5V13.3725Z`;
  const d3 = `M12.5953 10.6295H19V19H12.5953V10.6295Z`;
  const d4 = `M5 14.5456H11.4047V19H5V14.5456Z`;

  return (
    <svg fill="none" height={r24} viewBox="0 0 24 24" width={r24} xmlns="http://www.w3.org/2000/svg">
      <path d={d1} fill={fill} />
      <path d={d2} fill={fill} />
      <path d={d3} fill={fill} />
      <path d={d4} fill={fill} />
    </svg>
  );
}

export default React.memo(IconDashboard, compareProps);

IconDashboard.defaultProps = {
  fill: '#25282B',
};

IconDashboard.propTypes = {
  fill: PropTypes.string,
};
