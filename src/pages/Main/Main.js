import React, { useEffect, useState } from 'react';
import styles from './styles.scoped.css';
import HeadingPort from '@components/elements/HeadingPort';
import { fetchData } from '../../actioncreator/action';
import { useDispatch, useSelector } from 'react-redux';
import { MainContext } from './context';
import { InfoBar } from 'logeeport-ui';
import CollapseInfo from '@components/elements/CollapseInfo';
import ContentGmv from '@components/elements/ContentGmv';
import { thousand } from '@utils/format';

export default function Main() {
  const[mainInit,setMainInit] = useState('Laporan Performa Bisnis');
  const[dataGmv, setDataGmv] = useState([]);
  const { data } = useSelector((s) => s.main);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchingData = data.fetchDashboardGmv && data.fetchDashboardGmv.data;
    const dataFetchGmv = [
      {
        title: 'GVM',
        subTitle: 'Akumulasi seluruh transaksi yang berhasi dilakukan dalam periode waktu yang dipilih',
        total: `Rp ${thousand(fetchingData? fetchingData.gmv.total : 0)}`,
        collaps: true,
        content: [
          {
            title: 'Transaksi Kontainer',
            total: `Rp ${thousand(fetchingData? fetchingData.gmv.container : 0)}`
          },
          {
            title: 'Transaksi Pesanan Truk',
            total: `Rp ${thousand(fetchingData? fetchingData.gmv.truckOrder : 0)}`
          }
        ]
      },
      {
        title: 'Transaksi',
        subTitle: 'Semua transaksi dari semua metode pembayaran periode waktu yang dipilih.',
        total: `${thousand(fetchingData? fetchingData.transaction.total : 0)}`,
        collaps: false,
        content: []
      },
      {
        title: 'Revenue',
        subTitle: 'Total pendapatan dari seluruh transaksi pada periode waktu yang dipilih',
        total: `Rp ${thousand(fetchingData? fetchingData.revenue.total : 0)}`,
        collaps: true,
        content: [
          {
            title: 'Kontainer Paylater',
            total: `Rp ${thousand(fetchingData ? fetchingData.revenue.containerPayLater : 0)}`
          },
          {
            title: 'Pesanan Truk Paylater',
            total: `Rp ${thousand(fetchingData? fetchingData.revenue.orderTruckPayLater : 0)}`
          },
          {
            title: 'Pesanan Truk Invoice Acceptence',
            total: `Rp ${thousand(fetchingData?
              fetchingData.revenue.orderTruckInvoiceAcceptance : 0)}`
          },
          {
            title: 'Charge fee Kontainer',
            total: `Rp ${thousand(fetchingData?
              fetchingData.revenue.chargeFeeContainer : 0)}`
          },
          {
            title: 'Charge fee Pesanan Truk',
            total: `Rp ${thousand(fetchingData?
              fetchingData.revenue.chargeFeeOrderTruck : 0)}`
          }
        ]
      }
    ];
    dispatch(fetchData('fetchUserList', '', 'limit=10', 'MainApi'));
    dispatch(fetchData('fetchDashboardGmv', '', '', 'MainApi'));
    setDataGmv(dataFetchGmv);
  }, []);
  return (
    <MainContext.Provider value={{
      mainInit,setMainInit
    }}>
      <div className={styles.root}>
        <HeadingPort title={mainInit} />
        <InfoBar
          color="primary"
          text="Periode laporan: 2022"
        />
        {dataGmv && dataGmv.map((item, i) =>
          (<CollapseInfo
            children = {
              <>
                {item.content && item.content.map((item, i) =>
                  <ContentGmv data={item} key={i}/>
                )}
              </>
            }
            collaps = {item.collaps}
            header={item}
            key={i}
          />)
        )}
      </div>
    </MainContext.Provider>
  );
}
