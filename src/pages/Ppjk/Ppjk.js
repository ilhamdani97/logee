/* eslint-disable react/jsx-max-depth */
import React, { useEffect, useState } from 'react';
import styles from './styles.scoped.css';
import { PpjkContext } from './context';
import { useDispatch, useSelector } from 'react-redux';
// import { columnListData } from './constants';
import { DataTable , Button, Modal, Row, Col, Typography } from 'logeeport-ui';
import HeadingPort from '@components/elements/HeadingPort';
import { formatFullDate } from '@utils/format';
import { dataFilterTPKProps, dataFilterTPK, dataFilterStatusProps, dataFilterStatus } from './constants';
import UpdateForm from '../../components/forms/UpdateProfile';
import Select from '@components/fields/Select';

export default function Ppjk() {
  const dispatch = useDispatch();
  const[openModal, setOpenModal] = useState(false);
  const[dataModal, setDataModal] = useState([]);
  const[mainInit,setMainInit] = useState('Akun PPJK');
  const[listColoumn, setListColoumn] = useState([]);
  const[listUser, setListUser] = useState([]);
  const[valueTPK, setValueTPK] = useState('');
  const[valueStatus, setValueStatus] = useState(false);
  const { data } = useSelector((s) => s.main);

  const dataList = data.fetchUserList  && data.fetchUserList.data;

  const columnListData = [
    { heading: 'No', value: 'no' },
    { heading: 'Email PPJK', value: 'email' },
    { heading: 'No.HP PPJK', value: 'nohp' },
    { heading: 'Nama Akun PPJK', value: 'nameAccount' },
    { heading: 'Terdaftar', value: 'terdaftar' },
    { heading: 'TPK', value: 'tpk' },
    { heading: 'Akun PPJK', value: 'akunPpjk' },
    { heading: 'Status', value: 'status' },
    { heading: 'edit', value: (val) => lihatEdit(val) }
  ];

  useEffect(() => {
    const dataUser =
      dataList.map((value, index) => ({
        no: index+1,
        email: value.email,
        nohp: value.phone,
        nameAccount: value.name? value.name : '-',
        terdaftar: formatFullDate(value.createdAt),
        tpk: '',
        akunPpjk: value.companyName,
        status: statusLayout(value.isActive)
      }));
    setListColoumn(columnListData);
    setListUser(dataUser);
  }, []);

  const statusLayout = ( val ) => {
    return (
      <div className={val? styles.statusWrapperActive : styles.statusWrapperNoActive}>
        {val? 'Aktif' : 'Belum Aktif'}
      </div>
    );
  };

  const lihatEdit = (val) => {
    return (
      <Button onClick={() => handleEdit(val)} size="small">
        Edit
      </Button>
    );
  };

  const formSubmit = (values) => {
    // const payload = {
    //   email: values.email,
    //   password: values.password,
    //   app: APP.APP_ADMIN_PORT,
    //   deviceId: 'dummy-DeviceID',
    // };
    dispatch();

    // eslint-disable-next-line no-console
    console.info(values);
  };

  const handleEdit = (val) => {
    setOpenModal(true);
    // eslint-disable-next-line no-console
    console.info(val);
    const forDataModal = {
      'akunPpjk': val.akunPpjk,
      'nameAccount': val.nameAccount,
      'status': val.metaMark,
      'nohp': val.nohp,
      'terdaftar': val.terdaftar,
      'email': val.email
    };

    setDataModal(forDataModal);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleChangeTPK = (val) => {
    let { value } = val.target;
    setValueTPK(value);
    const dataUserFilterTPK = dataList.filter(data =>
      data.name === value &&
      valueStatus? data.isActive === valueStatus: data.name === value);
    if(dataUserFilterTPK[0]) {
      const dataFiltered =
      dataUserFilterTPK.map((value, index) => ({
        no: index+1,
        email: value.email,
        nohp: value.phone,
        nameAccount: value.name? value.name : '-',
        terdaftar: formatFullDate(value.createdAt),
        tpk: '',
        akunPpjk: value.companyName,
        status: statusLayout(value.isActive)
      }));
      setListColoumn(columnListData);
      setListUser(dataFiltered);
    } else {
      const columnListDataFilter = [
        { heading: 'No' },
        { heading: 'Email PPJK' },
        { heading: 'No.HP PPJK' },
        { heading: 'Nama Akun PPJK' },
        { heading: 'Terdaftar', },
        { heading: 'TPK', },
        { heading: 'Akun PPJK', },
        { heading: 'Status' },
      ];
      setListUser({});
      setListColoumn(columnListDataFilter);

    }
  };

  const handleChangeStatus = (val) => {
    let { value } = val.target;
    const valueStatus = value === 'Aktif' ? true : false;
    setValueStatus(valueStatus);
    const dataUserFilterStatus = dataList.filter(data =>
      data.isActive === valueStatus &&
      valueTPK? data.name === valueTPK : data.isActive === valueStatus);
    if(dataUserFilterStatus[0]) {
      const dataFiltered =
      dataUserFilterStatus.map((value, index) => ({
        no: index+1,
        email: value.email,
        nohp: value.phone,
        nameAccount: value.name? value.name : '-',
        terdaftar: formatFullDate(value.createdAt),
        tpk: '',
        akunPpjk: value.companyName,
        status: statusLayout(value.isActive)
      }));
      setListColoumn(columnListData);
      setListUser(dataFiltered);
    } else {
      const columnListDataFilter = [
        { heading: 'No' },
        { heading: 'Email PPJK' },
        { heading: 'No.HP PPJK' },
        { heading: 'Nama Akun PPJK' },
        { heading: 'Terdaftar', },
        { heading: 'TPK', },
        { heading: 'Akun PPJK', },
        { heading: 'Status' },
      ];
      setListUser({});
      setListColoumn(columnListDataFilter);

    }
  };

  return (
    <PpjkContext.Provider value={{
      mainInit,setMainInit
    }} >
      <div className={styles.root}>
        <HeadingPort title={mainInit} />
        <Row className={''} justify="space-between">
          <Col xs="3">
            <Select
              inputProps={dataFilterTPKProps} onChange={handleChangeTPK} options={dataFilterTPK}/>
          </Col>
          <Col xs="3">
            <Select
              inputProps={dataFilterStatusProps}
              onChange={handleChangeStatus} options={dataFilterStatus}/>
          </Col>
          <Col xs="6" />
        </Row>
        <DataTable column={listColoumn} data={listUser} withNumber />
        <Modal disableBackdropClick={true} onClose={handleClose} open={openModal} >
          <div className={styles.modal}>
            <div className={styles.titleModal}>
                Ubah Akun
            </div>
            <div className={styles.containerAccount}>
              <Row className={styles.footer} justify="space-between">
                <Col xs="2">
                  <img alt="profile" src="/assets/ic-avatar.svg" />
                </Col>
                <Col xs="7">
                  <Row>
                    <Typography className={styles.titleContent}>{dataModal.akunPpjk? dataModal.akunPpjk : '-'}</Typography>
                  </Row>
                  <Row>
                    <Typography>{dataModal.nameAccount ? dataModal.nameAccount: '-'}</Typography>
                  </Row>
                </Col>
                <Col xs="3">
                  <div className={dataModal.status?
                    styles.statusWrapperActive : styles.statusWrapperNoActive}>
                    {dataModal.status? 'Aktif' : 'Belum Aktif'}
                  </div>
                </Col>
              </Row>
              <Row className={styles.contentBottomModal} justify="space-between">
                <Col xs="6">
                  <Typography>Terdaftar: {dataModal.terdaftar? dataModal.terdaftar : '-'}</Typography>
                </Col>
              </Row>
            </div>
            <Row justify="space-between">
              <Col xs="4">
                Status Akun
              </Col>
              <Col xs="4">
                <Typography>Status Akun</Typography>
              </Col>
            </Row>
            <UpdateForm initialValues={dataModal} onSubmit={formSubmit}/>
          </div>
        </Modal>
      </div>
    </PpjkContext.Provider>
  );
}
