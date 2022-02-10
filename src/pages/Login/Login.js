import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Webp from '../../components/elements/Webp';
import LoginForm from '../../components/forms/Login';
import { APP } from '../../utils/constants';
import { login } from './actions';
import styles from './styles.scoped.css';
import { routes } from '@configs/routes';
import { Col, Row } from 'logeeport-ui';

export default function Login() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();


  const formSubmit = (values) => {
    const payload = {
      email: values.email,
      password: values.password,
      app: APP.APP_ADMIN_PORT,
      deviceId: 'dummy-DeviceID',
    };
    dispatch(login(payload, location));
  };



  return (
    <Row alignItem="center" className={styles.root}>
      <Col className={styles.mainBg} md="6" xs="12">
        <Webp name="login_bg.jpg" />
      </Col>
      <Col className={styles.mainForm} md="6" xs="12">
        <h3 className={styles.haeding}>
          Selamat Datang di
          <br />
          <span>Logee</span>
        </h3>
        <LoginForm onSubmit={formSubmit} />
        <div className={styles.register}>
          Belum memiliki akun?{' '}
          <span onClick={() => history.push(routes.REGISTER())}>
            Daftar Sekarang
          </span>
        </div>
      </Col>
    </Row>
  );
}
