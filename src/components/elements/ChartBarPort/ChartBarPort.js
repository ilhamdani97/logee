import React,{ useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';
import CustomTooltip from './CustomTooltip';
import style from './styles.scoped.css';
import { shortCurrency } from '@utils/format';

const ChartBarPort = ({ data,xLabel, tooltip, barType }) => {

  const [charts, setCharts] = useState(data);
  const [posData, setposData] = useState({});
  const { titleUpper, titleBottom } = tooltip;


  useEffect(() => {
    const newData = data.map((v)=>{

      let yStackAxis = v[titleBottom.value] + v[titleUpper.value];
      return {
        ...v,
        'yAxisUnit':shortCurrency(v[titleBottom.value]),
        'xAxisBar': shortCurrency(v[titleUpper.value]),
        'yAxisBar': shortCurrency(v[titleBottom.value]),
        'yStacked':barType === 'stack' ? shortCurrency(yStackAxis) : '0'
      };
    });

    setCharts(newData);
  }, [data]);

  return (
    <div className={style.responsiveChart}>
      <ResponsiveContainer>
        {barType === 'stack' ?
          <BarChart data={charts}>
            <XAxis dataKey={xLabel} />
            <YAxis dataKey="yStacked" orientation="right"   unit="jt"/>
            <Tooltip
              content={<CustomTooltip customProps={tooltip}/>}
              cursor={{ fill: '#efefef' }}
              position={{ x: posData.x - 50, y: posData.y - 70 }}
            />
            <CartesianGrid stroke="#eee" strokeDasharray="5 0"/>
            <Bar barSize={10} dataKey="yAxisBar" fill="#487A9D" onMouseLeave={() => {
              setposData({});
            }} onMouseOver={(el) => {
              el?setposData(el):setposData({});
            }}

            stackId="stackBar"/>
            <Bar barSize={10} dataKey="xAxisBar" fill="#e8590c" onMouseLeave={() => {
              setposData({});
            }} onMouseOver={(el) => {
              el?setposData(el):setposData({});
            }}

            stackId="stackBar"/>
          </BarChart>
          :
          <BarChart data={charts}>
            <XAxis dataKey={xLabel} />
            <YAxis dataKey="yAxisUnit" orientation="right" unit="jt"/>
            <Tooltip
              content={<CustomTooltip customProps={tooltip}/>}
              cursor={{ fill: '#efefef' }}
              position={{ x: posData.x - 50, y: posData.y - 70 }}
            />
            <CartesianGrid stroke="#eee" strokeDasharray="5 0"/>
            <Bar barSize={10} dataKey="yAxisUnit" fill="#e8590c"
              onMouseLeave={() => {
                setposData({});
              }}

              onMouseOver={(el) => {
                el?setposData(el):setposData({});
              }}/>
          </BarChart>
        }
      </ResponsiveContainer>
    </div>
  );
};


ChartBarPort.defaultProps = {
  barType:'',
  data: [],
  stack:'',
  tooltip:{},
  xLabel:'',
};

ChartBarPort.propTypes = {
  barType: PropTypes.string,
  data: PropTypes.array,
  stack: PropTypes.string,
  tooltip:PropTypes.object,
  xLabel: PropTypes.string,
};


export default ChartBarPort;


