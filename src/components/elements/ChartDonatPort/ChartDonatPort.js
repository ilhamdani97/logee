import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './styles.scoped.css';
import PropTypes from 'prop-types';
import RenderCustomizedLabel from './RenderCustomizedLabel';


const ChartDonatPort = ({ data, colors }) => {

  return (
    <div className={styles.responsiveChart}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            cornerRadius={100}
            data={data}
            dataKey="value"
            endAngle={-180}
            innerRadius={85}
            label={<RenderCustomizedLabel />}
            labelLine={false}
            outerRadius={110}
            paddingAngle={-10}
            startAngle={180}
            stroke="none"
          >
            {data.map((_, index) => (
              <Cell fill={colors[index % colors.length]} key={`cell-${index}`} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};



ChartDonatPort.defaultProps = {
  colors:[],
  data: [],
};

ChartDonatPort.propTypes = {
  colors:PropTypes.array,
  data: PropTypes.array,
};


export default ChartDonatPort;
