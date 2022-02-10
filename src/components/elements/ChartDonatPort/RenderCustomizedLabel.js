import React from 'react';
import styles from './styles.scoped.css';

const RenderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const renderCircle = (<g className={styles.circleFill}>
    <circle
      cx={x > cx ? x+10 : x-10}
      cy={y > cy ? y+10 : y-10}
      r="15" />
    <text
      className={styles.textCircle}
      dominantBaseline="central"
      fill="black"
      textAnchor="middle"
      x={x > cx ? x+10 : x-10}
      y={y > cy ? y+10 : y-10}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  </g>);

  return percent !== 0 ? renderCircle :null;
};

export default RenderCustomizedLabel;
