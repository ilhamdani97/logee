import React from 'react';
import style from './styles.scoped.css';
import PropTypes from 'prop-types';
import { thousand } from '../../../utils/format';


const CustomTooltip = (props) => {
  const{ active, payload,customProps } = props;


  const convertToCurrency = (isCurrency,val) => {
    let currency = isCurrency ? `Rp ${thousand(val)}`: val;

    return currency;
  };
  if (active && payload && payload.length) {

    const captionUpper = payload[0].payload[customProps.titleUpper.value];
    const captionBottom = payload[0].payload[customProps.titleBottom.value];
    const bgUpper = [style[customProps.titleUpper.tooltipColor],style.tooltipRadiusUpper].join(' ');
    const bgBottom = [style[customProps.titleBottom.tooltipColor],style.tooltipRadiusBottom].join(' ');
    const subCapUp = customProps.titleUpper.subCaption;
    const subCapBtm = customProps.titleBottom.subCaption;
    return (
      <div className={style.tooltip}>
        <div className={bgUpper}>
          {`
          ${subCapUp.textPosition === 'left' ? subCapUp.textValue : ''}
          ${convertToCurrency(customProps.titleUpper.currency, captionUpper)} 
          ${subCapUp.textPosition === 'right' ? subCapUp.textValue : ''}
          `}

        </div>
        <div className={bgBottom}>
          {`
          ${subCapBtm.textPosition === 'left' ? subCapBtm.textValue : ''}
          ${convertToCurrency(customProps.titleBottom.currency,  captionBottom)} 
          ${subCapBtm.textPosition === 'right' ? subCapBtm.textValue : ''}`}
        </div>

      </div>
    );
  }

  return null;
};


CustomTooltip.defaultProps = {
  active:false,
  customProps:{},
  payload: [],
};

CustomTooltip.propTypes = {
  active:PropTypes.bool,
  customProps: PropTypes.object,
  payload: PropTypes.array,
};


export default CustomTooltip;
