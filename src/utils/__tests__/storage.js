import {
  clearStorages,
  setExpireTime,
  checkExpireTime,
  setUserData,
  getUserData,
} from '../storage';

const EXPIRE_TIME_STORAGE = 'logee-transportation_expire_time';
const TOKEN_STORAGE = 'logee-transportation_access_token';
const USER_DATA_STORAGE = 'logee-transportation_user_data';
const USER_ROLE = 'logee-transportation_user_role';
const COMPANY_ID = 'logee-transportation_company_id';
const COMPANY_NAME = 'logee-transportation_company_name';

const textTest = 'test';
const objectTest = { src: textTest };

describe('src/utils/storage', () => {
  afterAll(() => localStorage.clear());
  test('clearStorages', () => {
    clearStorages();
    const storedData = {
      EXPIRE_TIME_STORAGE: localStorage.getItem(EXPIRE_TIME_STORAGE),
      TOKEN_STORAGE: localStorage.getItem(TOKEN_STORAGE),
      USER_DATA_STORAGE: localStorage.getItem(USER_DATA_STORAGE),
      USER_ROLE: localStorage.getItem(USER_ROLE),
      COMPANY_ID: localStorage.getItem(COMPANY_ID),
      COMPANY_NAME: localStorage.getItem(COMPANY_NAME),
    };
    expect(storedData.EXPIRE_TIME_STORAGE).toBeFalsy();
    expect(storedData.TOKEN_STORAGE).toBeFalsy();
    expect(storedData.USER_DATA_STORAGE).toBeFalsy();
    expect(storedData.USER_ROLE).toBeFalsy();
    expect(storedData.COMPANY_ID).toBeFalsy();
    expect(storedData.COMPANY_NAME).toBeFalsy();
  });
  test('checkExpireTime', () => {
    setExpireTime(20);
    const storedData = localStorage.getItem(EXPIRE_TIME_STORAGE);
    expect(storedData).toBe('20000');
    const isExpired = checkExpireTime();
    expect(isExpired).toBe(true);
  });
  test('UserData', () => {
    setUserData(objectTest);
    const data = getUserData(USER_DATA_STORAGE);
    expect(data).toEqual(objectTest);
  });
});
