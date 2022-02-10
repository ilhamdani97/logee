import React from 'react';
import styles from './styles.scoped.css';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function Search(props) {
  const { handleSubmit,changeKeyword,keyword,disabled,inputProps, className } = props;
  const classes = [styles.root, className].filter(Boolean).join(' ');

  const buttonHandleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(keyword);
  };

  const getPlaceholder = () => {
    if(inputProps.placeholder && inputProps.placeholder.length > 21){
      return `${inputProps.placeholder.substring(0, 22)}...`;
    } else {
      return inputProps.placeholder;
    }
  };

  return(
    <div className={classes}>
      <form onSubmit={buttonHandleSubmit}>
        <div>
          <input disabled={disabled} onChange={(e)=> changeKeyword(e.target.value)}
            {...inputProps} placeholder={getPlaceholder()} value = {keyword}/>
          <div>
            <Button buttonProps={{ type: 'submit' }}>
              <img src="/assets/search.svg"/>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

Search.defaultProps = {
  changeKeyword : () => {},
  className: '',
  disabled:false,
  handleSubmit  : () => {},
  inputProps: {
    placeholder: 'Cari'
  },
  keyword : '',
};

Search.propTypes = {
  changeKeyword: PropTypes.func,
  className: PropTypes.string,
  disabled:PropTypes.bool,
  handleSubmit: PropTypes.func,
  inputProps: PropTypes.object,
  keyword: PropTypes.string
};
