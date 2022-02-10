/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';
import moment from 'moment';
import { generateTextNotif, formatFullDate } from '../../../utils/format';


function Notification(props) {
  const history = useHistory();
  const { className, show, handleShow, showAll } = props;
  const { fetchData, listNotifikasi } = useSelector(s => s.listNotifikasi);
  const dispatch = useDispatch();
  const emptyList = !listNotifikasi || listNotifikasi.length === 0;

  const classes = [styles.root, className].filter(Boolean).join(' ');

  useEffect(() => {
    dispatch(fetchData('listNotifikasi'));
  }, [dispatch, show]);

  const _handleGoto = useCallback((item) => {
    if (item.type === 'order-created' || item.type === 'order-finished') {
      const _deliveryDetailId = item.deliveryDetailId;
      if (_deliveryDetailId) {
        history.push(`/pemesanan?id=${_deliveryDetailId}`);
      }
    } else if (item.type === 'vehicle') {
      history.push(`/kendaraan?id=${item.vehicleId}`);
    }
  }, []);

  return (
    <div className={[classes, show ? styles.showNotifAlert : ''].join(' ')} onMouseLeave={() => handleShow(false)} >
      <div className={styles.boxcursor} />
      <div className={styles.containerNotif}>
        <section>
          <div>
            Notifikasi
          </div>
          <div onClick={() => showAll()}>
            Lihat Semua
          </div>
        </section>
        <section className={emptyList ? styles.emptyList : ''}>
          <div>
            {emptyList ?
              <div className={styles.listNotifEmpty}>Belum ada notifikasi</div>
              :
              listNotifikasi.map((item, i) => {
                const _textNotif = generateTextNotif(item.text);

                return (
                  <div className={styles.listNotif} key={i} onClick={() => _handleGoto(item, i)} >
                    <div className={i !== 0 ? styles.hideCreateAt : ''}>
                      {formatFullDate(item.createdAt, 4)}
                    </div>
                    <div>
                      <div className={item.isClicked ? styles.hasRead : ''} />
                      <div>
                        <span dangerouslySetInnerHTML={{ __html: _textNotif.text1 || '' }} />
                        <span>{_textNotif.text2}</span>
                        <span dangerouslySetInnerHTML={{ __html: _textNotif.text3 || '' }} />
                      </div>
                    </div>
                    <div>
                      {moment(item.createdAt).format('HH:mm')}
                    </div>
                  </div>
                );
              })
            }
          </div>
        </section>
      </div>
    </div>
  );
}

export default React.memo(Notification, (prevProps, nextProps) => {
  return prevProps.show === nextProps.show;
});

Notification.defaultProps = {
  className: '',
  handleShow: () => { },
  show: false,
  showAll: () => { },
};

Notification.propTypes = {
  className: PropTypes.string,
  handleShow: PropTypes.func,
  show: PropTypes.bool,
  showAll: PropTypes.func
};
