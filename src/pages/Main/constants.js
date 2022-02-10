import React from 'react';
export const SUCCESS = 'success';
export const RESET = 'reset';
export const DATA_FETCHED = 'Dashboard/data-fetched';
export const LOADING = 'Dashboard/loading';
export const FAILED = 'Dashboard/failed';
export const CLEAR_MESSAGE = 'Dashboard/clearmessage';

export const dataCaption = [{
  title:'Transaksi & Kontainer',
  type:'fetchChartProforma',
  xLabel:'periodNode',
  yLabel:'totalTransaction',
  tooltip:{
    titleUpper:{
      currency:false,
      value:'totalContainer',
      subCaption:{
        textPosition:'right',
        textValue:'Kontainer'
      },
      tooltipColor:'primary'
    },
    titleBottom:{
      currency:true,
      value:'totalTransaction',
      subCaption:{
        textPosition:'right',
        textValue:''
      },
      tooltipColor:'primary'
    }
  },
  averageInfo:<p style={{ textAlign:'center' }}>Rata-rata jumlah kontainer dan transaksinya <br />
  dalam satu periode waktu yang dipilih.</p>,
  averageCaption:{
    titleLeft:'Kontainer',
    titleRight:'Transaksi',
    valueLeft:{
      currency:false,
      value:'averageContainer'
    },
    valueRight:{
      currency:true,
      value:'averageTransaction'
    }
  },
  barType:'normal',
},
{
  title:'Ekspor & Impor',
  type:'fetchExportImport',
  xLabel:'periodNode',
  yLabel:'totalTransactionImport',
  tooltip:{
    titleUpper:{
      currency:true,
      value:'totalTransactionImport',
      subCaption:{
        textPosition:'left',
        textValue:'Impor : '
      },
      tooltipColor:'primary'
    },
    titleBottom:{
      currency:true,
      value:'totalTransactionExport',
      subCaption:{
        textPosition:'left',
        textValue:'Ekpor : '
      },
      tooltipColor:'secondary'
    }
  },
  averageInfo:<p style={{ textAlign:'center' }}>Rata-rata jumlah transaksi ekspor dan impor <br />
  dalam satu periode waktu yang dipilih.</p>,
  averageCaption:{
    titleLeft:'Impor',
    titleRight:'Ekspor',
    valueLeft:{
      currency:true,
      value:'averageTransactionImport'
    },
    valueRight:{
      currency:true,
      value:'averageTransactionExport'

    }
  },
  barType:'stack',
},
{
  title:'Pesanan Truk',
  type:'fetchPesananTruck',
  xLabel:'periodNode',
  yLabel:'totalTransaction',
  tooltip:{
    titleUpper:{
      currency:false,
      value:'totalOrderCount',
      subCaption:{
        textPosition:'right',
        textValue:'Pesanan'
      },
      tooltipColor:'primary'
    },
    titleBottom:{
      currency:true,
      value:'totalTransaction',
      subCaption:{
        textPosition:'right',
        textValue:''
      },
      tooltipColor:'primary'
    }
  },
  averageInfo:<p style={{ textAlign:'center' }}>Rata-rata jumlah pesanan dan transaksinya <br />
  dalam satu periode waktu yang dipilih.</p>,
  averageCaption:{
    titleLeft:'Pesanan Truk',
    titleRight:'Transaksi Truk',
    valueLeft:{
      currency:false,
      value:'averageOrderCount'
    },
    valueRight:{
      currency:true,
      value:'averageTransaction'
    }
  },
  barType:'normal',
}];

export const optionsArray = [
  { text: 'NPCT1', value: 'NPCT1' },
  { text: 'KOJA', value: 'KOJA' },
  // { text: 'NLE', value: 'NLE' },
  // { text: 'JICT', value: 'JICT' },
];

export const tab = [
  { 'title': 'Semua', 'active': true, 'status': 'false', alias:'ALL', totalName:'totalALL' },
  { 'title': 'Memproses Proforma', 'active': false, 'status': 'true', alias:'CREATED',totalName:'totalCREATED' },
  { 'title': 'Menunggu Pembayaran', 'active': false, 'status': 'true', alias:'PROCESSED',totalName:'totalPROCESSED' },
  { 'title': 'Sudah dibayar', 'active': false, 'status': 'true', alias:'PAID',totalName:'totalPAID' },
];


export const proformaToolTip = {
  'paid': <p>Total transaksi proforma pengurusan baru <br />dan perpanjangan yang telah dibayar PPJK</p>,
  'unpaid': <p>Total transaksi proforma pengurusan baru <br />dan perpanjangan yang belum dibayar PPJK</p>
};



export const akusisiToolTip = {
  'aktif': {
    'title': 'Akun Aktif',
    'tooltip': <p>Total akun PPJK yang <br />berhasil diaktivasi oleh BisOps.</p>
  },
  'nonAktif': {
    'title': 'Akun Belum Aktif',
    'tooltip': <p>Total akun PPJK yang <br />belum diaktivasi oleh BisOps.</p>
  },
  'akunKonek': {
    'title': 'User Terhubung',
    'tooltip': <p>Total user yang terhubung <br />dengan PPJK</p>
  },
  'trukJoin': {
    'title': 'Truk Bergabung',
    'tooltip': <p>Jumlah truk yang baru ditambahkan <br />mitra Trucker untuk kebutuhan PPJK</p>
  },
};
