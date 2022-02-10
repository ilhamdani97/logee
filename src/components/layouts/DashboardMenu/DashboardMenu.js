import React, { useContext } from 'react';
import SideBar from '@layouts/SideBar';
import { clearStorages } from '@utils/storage';
import { useCookie } from 'logeeport-ui';
import { navsArray } from './constants';
import styles from './styles.scoped.css';
import { PageBaseContext } from '@layouts/PageBase/Context';
import { ROLES } from '@utils/constants';
import { routes } from '@configs/routes';


const DashboardMenu = () => {
  const { showMenu } = useContext(PageBaseContext);
  const _handlerLogout = () => {
    clearStorages();
    useCookie.removeAllCookie();
    window.location.href = routes.LOGIN();
  };

  return (
    <>
      <aside className={[styles.asidefirst, showMenu && styles.showMenu].join(' ')}>
        <div className={styles.navContainer}>
          <a className={styles.logoLogee}>
            <img alt="logout" src="/assets/ic-logo.svg" />
          </a>
          <a className={styles.handleLogout} onClick={()=>_handlerLogout()}>
            <img alt="logout" src="/assets/ic-exit.svg" />
          </a>
        </div>
      </aside>
      <aside className={[styles.aside, showMenu && styles.showMenu].join(' ')}>
        <div className={styles.navContainer}>
          <SideBar data={navsArray[ROLES.TRANSPORT_ADMIN]} />
        </div>
      </aside>
    </>
  );
};

export default DashboardMenu;
