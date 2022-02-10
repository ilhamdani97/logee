export const APP = {
  APP_ADMIN: 'transport-dashboard',
  APP_CARGO: 'transport-cargo',
  APP_TRUCK: 'transport-truck',
  APP_DRIVER: 'transport-driver',
  APP_NPCT1: 'port-npct1',
  APP_NLE: 'port-dashboard',
  APP_ADMIN_PORT: 'port-admin-dashboard',
  APP_SSO_PORT: 'port-sso-dashboard'
};

export const ROLES = {
  CARGO_ADMIN: 'cargo-admin',
  CARGO_OWNER: 'cargo-owner',
  TRUCK_ADMIN: 'truck-admin',
  TRUCK_OWNER: 'truck-owner',
  TRANSPORT_ADMIN: 'transport-admin',
  PORT_NPCT1: 'port-npct1',
  PORT_NLE: 'port-nle',
  PORT_KOJA: 'port-koja',
  DRIVER: 'driver',
  TRANSPORT_FINANCE: 'transport-finance',
  PORT_ADMIN: 'port-admin',
  npct1: 'npct1',
  jict: 'jict'
};

export const STATUS_DELIVERY_MESSAGE = {
  1: { label: 'Menunggu Konfirmasi', icon: 'ic-hourglass' },
  2: { label: 'Pesanan Terkonfirmasi', icon: 'ic-accept' },
  3: { label: 'Menuju Pengambilan', icon: 'ic-shipping' },
  4: { label: 'Tiba Di Pengambilan', icon: 'ic-arrived' },
  5: { label: 'Mengangkut Muatan', icon: 'ic-warehouse' },
  6: { label: 'Menuju Pengiriman', icon: 'ic-shipping' },
  7: { label: 'Tiba Di Pengiriman', icon: 'ic-arrived' },
  8: { label: 'Bongkar Muatan', icon: 'ic-warehouse' },
  9: { label: 'Muatan Diterima' },
  10: { label: 'Pesanan Selesai', icon: 'ic-done' },
  11: { label: 'Pesanan Dibatalkan', icon: 'ic_cancel' }
};

export const MESSAGE_ERROR_KOJA =[
  'User sedang aktif. Silakan logout terlebih dahulu.'
];

export const MESSAGE_MODAL_KOJA =[
  { title:'Akun Sedang Digunakan',
    message:'Silahkan login kembali nanti atau hubungi Customer Service KOJA :'
  }
];

export const modeEnv = process.env.MODE;

export const redirectList = {
  'local':
    [
      {
        'name':'npct1',
        'redirect':'http://localhost:3001/dashboard'
      },
      {
        'name':'koja',
        'redirect':'http://localhost:4000/dashboard'
      },
      {
        'name':'nle',
        'redirect':'https://nle.kemenkeu.go.id/portal/#/login'
      },
    ]
  ,
  'development':[
    {
      'name':'npct1',
      'redirect':'https://npct1-dev.ecologee.id/dashboard'
    },
    {
      'name':'koja',
      'redirect':'https://koja-dev.ecologee.id/dashboard'
    },
    {
      'name':'nle',
      'redirect':'https://nle.kemenkeu.go.id/portal/#/login'
    },
  ],
  'staging':[
    {
      'name':'npct1',
      'redirect':'https://npct1-stage.ecologee.id/dashboard'
    },
    {
      'name':'koja',
      'redirect':'https://koja-stage.ecologee.id/dashboard'
    },
    {
      'name':'nle',
      'redirect':'https://nle.kemenkeu.go.id/portal/#/login'
    },
  ],
  'production':[
    {
      'name':'npct1',
      'redirect':'https://npct1.ecologee.id/dashboard'
    },
    {
      'name':'koja',
      'redirect':'https://koja.ecologee.id/dashboard'
    },
    {
      'name':'nle',
      'redirect':'https://nle.kemenkeu.go.id/portal/#/login'
    },
  ]
};
