import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Text from '../../fields/Text_V2';
import Password from '../../fields/Password';
import styles from './styles.scoped.css';
import { Button, Tooltip } from 'logeeport-ui';
import { useSelector } from 'react-redux';

const Register = (props) => {
  const { handleSubmit, valid } = props;
  const nameInputProps = {
    placeholder: 'Contoh: Muhammad Fahmi Faisal Hikmawan',
  };
  const npwpInputProps = { placeholder: 'Contoh: 123456789000000' };
  const phoneInputProps = { placeholder: 'Contoh: 081234567890' };
  const textInputProps = { placeholder: 'Contoh: email@logeeport.id' };
  const passwordInputProps = {
    placeholder: 'Min. 8 karakter terdiri dari huruf besar & angka',
  };

  const { message, isLoading } = useSelector((s) => s.register);

  return (
    <>
      <form className={styles.root}>
        <div className={styles.info}>
          <Field
            component={Text}
            inputProps={npwpInputProps}
            label="Nomor NPWP Perusahaan"
            name="npwp"
          />
          <div className={styles.infoForm}>
            <Tooltip content={<p>Pastikan nomor NPWP Benar, <br />digunakan untuk aktivasi akun <br />dan verifikasi transaksi.</p>} direction="bottom">
              <img src="/assets/ic-info-circle.svg" />
            </Tooltip>
          </div>
        </div>
        <div className={styles.info}>
          <Field
            component={Text}
            inputProps={phoneInputProps}
            label="Nomor Handphone Anda"
            name="phone"
          />
          <div className={styles.infoForm}>
            <Tooltip content={<p>Pastikan nomor Anda Aktif <br />dan Benar, digunakan untuk <br />menerima SMS OTP transaksi.</p>} direction="bottom">
              <img src="/assets/ic-info-circle.svg" />
            </Tooltip>
          </div>
        </div>
        <Field
          component={Text}
          inputProps={textInputProps}
          label="Email Anda"
          name="email"
        />
        <Field
          component={Text}
          inputProps={nameInputProps}
          label="Nama Lengkap Anda"
          name="name"
        />
        <Field
          className={styles.password}
          component={Password}
          inputProps={passwordInputProps}
          label="Kata Sandi Akun Anda"
          name="password"
        />
        <Field
          component={Password}
          inputProps={passwordInputProps}
          label="Ulangi Kata Sandi Akun Anda"
          name="retypepassword"
        />
        <Button
          disabled={isLoading.fetchRegister || !valid}
          isLoading={isLoading.fetchRegister}
          onClick={handleSubmit}
        >
          Daftar
        </Button>
        <div className={styles.term}>
          Dengan mendaftar, kamu telah menyetujui <span>Kebijakan Privasi</span>
        </div>
      </form>

      {message.fetchRegister && <span className={styles.error}>{message.fetchRegister}</span>}
    </>
  );
};

Register.defaultProps = {
  handleSubmit: () => {},
  valid: true,
};

Register.propTypes = {
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
};

export default Register;
