import moment from 'moment';
import queryString from 'querystring';
import { useHistory, useLocation } from 'react-router-dom';

// moment.locale('id');

export const thousand = val => (
  Math.round(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') //NOSONAR
);

export const formatDate = (date, format) => date && moment(date).format(format);


export const removeDot = val => (
  val.toString().replace(/\./g, '')
);

export const percentageNumber = val => {
  const string = ((val * 10) * 10).toString();
  if (string.includes('.')) {
    const split = Math.round(Number(`0.${string.split('.')[1]}`) * 10);
    const convert = split.toString();
    return `${string.split('.')[0]}.${convert.charAt(0)}`;
  } else {
    return string;
  }
};

export const toTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
};

export const generateTextNotif = (value) => {
  const generateText = {
    text1: '',
    text2: '',
    text3: ''
  };
  if (value) {
    const _textSplit = value.split('<span>');
    if (_textSplit.length === 0) {
      generateText.text1 = '';
    } else if (_textSplit.length === 1) {
      generateText.text1 = _textSplit[0];

    } else {
      generateText.text1 = _textSplit[0];
      if (_textSplit[1]) {
        generateText.text2 = _textSplit[1].split('</span>')[0];
        generateText.text3 = _textSplit[1].split('</span>')[1];
      }
    }
  }
  return generateText;
};

export const generateTypeNotif = (value) => {
  const _value = value || '';
  let _typeNotif = '-';
  if (_value.toLowerCase().indexOf('order') >= 0) {
    _typeNotif = 'Transaksi';
  } else if (_value === 'user-created') {
    _typeNotif = 'User Baru';
  } else if (_value === 'vehicle') {
    _typeNotif = 'Kendaraan';
  }
  return _typeNotif;
};

export function useQuery() {
  const history = useHistory();
  const location = useLocation();
  const parseQuery = queryString.parse(location.search.replace('?', ''));
  const stringify = (params) => queryString.stringify({ ...parseQuery, ...params });

  return { parseQuery, pushQuery: (v) => history.push(`?${stringify(v)}`) };
}


export const changeFormatPhone = (str) => {
  if (str.slice(0, 3) === '+62') {
    return str.replace('+62', '0');
  }
  return str;
};

export const formatFullDate = (date, char) => {
  const dateFormat = moment(date).format('DD');
  const month = moment(date).format('MMMM');
  const year = moment(date).format('YYYY');
  return `${dateFormat} ${month.substring(0, 3)} ${year.substring(4 - char)}`;
};

export const formatDateLogee = (date) => date && moment(date).format('DD MMM YYYY • HH:mm');

export const formatEmail = (email) => {
  const reqEmail = new RegExp([
    '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)',
    '(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])',
    '(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
  ].join('|'));

  return reqEmail.test(email);
};

export const normalizeQueryParams = (arr)=>{
  let queries = [];
  arr.filter(el => el !== null).forEach((element, index) => {
    if(index !== 0){
      queries.push('&');
    }
    queries.push(element);
  });
  return queries.join(' ').replace(/\s+/g, '');
};


export const shortCurrency = (labelValue) =>{
  let unit = Math.floor((labelValue / 1000000));
  return unit;
};

export const convertTipeIn = (typeIn) => {
  let newTypeIn;
  switch (typeIn) {
    case 'IMPORT':
      newTypeIn = 'impor';
      break;
    case 'EXPORT':
      newTypeIn = 'ekspor';
      break;
    default:
      newTypeIn = '';
      break;
  }

  return newTypeIn;
};

export const thousandSeparator = (value) => (
  value && thousand(value.replace(/[^0-9]+/g, ''))
);

export const convertProformaStatus = (status) => {
  let newStatus;
  switch (status) {
    case 'PROCESSED':
      newStatus = 'Belum Dibayar';
      break;
    case 'PAID':
      newStatus = 'Sudah Dibayar';
      break;
    case 'CREATED':
      newStatus = 'Memproses Proforma';
      break;
    case 'PROCESSED_PAYMENT':
      newStatus = 'Pembayaran Diproses';
      break;
    default:
      newStatus = 'Default Status';
      break;
  }

  return newStatus;
};
