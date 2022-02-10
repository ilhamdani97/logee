import * as format from '../format';

describe('src/utils/format', () => {
  test('thousand', () => {
    const result = format.thousand(1000);
    expect(result).toEqual('1.000');
  });

  test('formatDate ', () => {
    const result = format.formatDate('12122021','DD-MM-YYYY');
    expect(result).toEqual('DD-MM-YYYY');
  });

  test('removeDot ', () => {
    const result = format.removeDot('1.000');
    expect(result).toEqual('1000');
  });

  test('changeFormatPhone ', () => {
    const result = format.changeFormatPhone('+6281377667766');
    expect(result).toEqual('081377667766');
  });

  test('generateTypeNotif Transaksi', () => {
    const result = format.generateTypeNotif ('order');
    expect(result).toEqual('Transaksi');
  });
  test('generateTypeNotif  User Baru', () => {
    const result = format.generateTypeNotif ('user-created');
    expect(result).toEqual('User Baru');
  });
  test('generateTypeNotif  Kendaraan', () => {
    const result = format.generateTypeNotif ('vehicle');
    expect(result).toEqual('Kendaraan');
  });

  test('toTitleCase', () => {
    const result = format.toTitleCase ('vehicle');
    expect(result).toEqual('Vehicle');
  });

});
