import { useCookie, format } from 'logeeport-ui';
import React, { useContext } from 'react';
import { PageBaseContext } from '../PageBase/Context';
import styles from './styles.scoped.css';

const DashboardHeader = () => {
  const { setShowMenu } = useContext(PageBaseContext);

  return (
    <header>
      <div className={styles.logo}>Logee</div>
      <div className={styles.userAkses} onClick={()=>setShowMenu(prev=>!prev)}>
        <div className={styles.userAksesIcon}>
          <img src="/assets/profile_circle.png"/>
        </div>
        <div className={styles.userAksesName}>{useCookie.getCookie('userLogin') ? format.stringToJson(useCookie.getCookie('userLogin')).company.name : null}</div>
      </div>
    </header>

  );
};

export default DashboardHeader;
