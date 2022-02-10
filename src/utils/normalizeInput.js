import { thousand } from './format';

const regexAlphabet = /[^a-zA-Z ]+/g;
const regexAlphanumeric = /[^a-zA-Z0-9]+/g;
const regexAlphanumericWhiteSpace = /[^a-zA-Z0-9 ]+/g;
const regexAlphanumericWithSpecialCharacter = /[^a-zA-Z0-9.,/ ]*$/g;
const regexNumber = /[^0-9]+/g;
const regexNumberSpecial = /[^0-9,.]+/g;
const regexNoSpace = /\s/g;
const regexWebsite = /[^a-zA-Z0-9./:-]+/g;
const regexSiup = /[^a-zA-Z0-9./-]+/g;
const regexNumberDot = /[^0-9.]+/g;
const phoneRegex = /^0[0-9].*$/ ;

export const alphabet = (value) => (
  value && value.replace(regexAlphabet, '')
);

export const alphanumeric = (value) => (
  value && value.replace(regexAlphanumeric, '')
);

export const alphanumericWhiteSpace = (value) => (
  value && value.replace(regexAlphanumericWhiteSpace, '')
);

export const AlphanumericWithSpecialCharacter = (value) => (
  value && value.replace(regexAlphanumericWithSpecialCharacter, '')
);

export const number = (value) => (
  value && value.replace(regexNumber, '')
);

export const numberDot = (value) => (
  value && value.replace(regexNumberDot, '')
);

export const numberKarakter = (value) => (
  value && value.replace(regexNumberSpecial, '')
);

export const noSpace = (value) => (
  value && value.replace(regexNoSpace, '')
);

export const siup = (value) => (
  value && value.replace(regexSiup, '')
);

export const thousandSeparator = (value) => (
  value && thousand(value.replace(/[^0-9]+/g, ''))
);

export function textLowerCase(value) {
  return value && value.toLowerCase();
}

export const Website = (value) => (
  value && value.replace(regexWebsite, '')
);

export const percentageLimit = value => {
  const number = numberDot(value);
  if(!number.includes('.') && number.length === 4){
    const splittedNumber = number.split('');
    splittedNumber[3] = `.${splittedNumber[3]}`;
    return splittedNumber.join('');
  }
  return number;
};

export const isPhone = value => phoneRegex.test(value);
