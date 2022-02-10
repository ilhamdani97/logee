import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { RedirectModal, useCookie } from 'logeeport-ui';
import { LOGEETRANS_URL } from '../../../services/order';
import jwt from 'jwt-simple';
import styles from './styles.scoped.css';


const RedirectToAdminTruk = ({ open, onClose,data, tipe }) => {

  useEffect(() => {
    const payload = useCookie.getCookie('userLogin') ? JSON.parse(useCookie.getCookie('userLogin')):null;
    const token = useCookie.getCookie('accessToken') || null;
    const ekripPayload = { ...payload,accessToken:token };
    const secret = 'xxx';
    const LogeeToken = jwt.encode(ekripPayload, secret);


    let logeeUrl = {
      'invoice':`${LOGEETRANS_URL}/invoice?type=single
      &order=${data.orderNumber}
      &id=${data.deliveryDetailId}
      &logeeport=${LogeeToken}`,
      'order':`${LOGEETRANS_URL}/pemesanan?id=${data.deliveryDetailId}&logeeport=${LogeeToken}`
    };


    if(open){
      setTimeout(()=>{
        window.open(logeeUrl[tipe],'_blank');
        onClose();
      },3000);
    }

  }, [open]);

  return (
    <RedirectModal open={open}>
      <p className={styles.headLoading}>Mengarahkan ke Logee Truk</p>
      <p className={styles.captionLoading}>
          Anda dapat melihat detail pemesanan truk lebih detail di Logee Truck.
      </p>
    </RedirectModal>
  );
};
RedirectToAdminTruk.defaultProps = {
  data:null,
  onClose:()=>{},
  open:false,
  tipe: ''

};

RedirectToAdminTruk.propTypes = {
  data:PropTypes.object,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  tipe: PropTypes.string,
};
export default RedirectToAdminTruk;
