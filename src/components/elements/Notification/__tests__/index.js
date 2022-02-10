import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Notification from '../Notification';
import { useSelector } from 'react-redux';

const { defaultProps } = Notification.type;

useSelector.mockImplementation(fn => {
  fn({});
  return {
    listNotifikasi: [

      {
        messageId: 'f092f8cf-8282-4bb3-87a2-10253911eabe',
        createdAt: '2021-08-03',
        deliveryDetailId: 'c8e84305-7900-432a-8de7-84ac96c9a6b9',
        text: 'Order baru layanan truk <span>No. Pesanan LT-202108030021</span> oleh <b>BUDI JAYA SEJAHTERA ABADI</b>menggunakan truk milik <b>BINTANG EXPRESS</b> dari <b>Kec. Cibeunying Kidul</b> menuju <b>Malang</b> nilai transaksi <b>Rp500.000,00</b>',
        type: 'order-created'
      },
      {
        messageId: 'f092f8cf-8282-4bb3-87a2-10253911eabe',
        createdAt: '2021-08-03',
        deliveryDetailId: 'c8e84305-7900-432a-8de7-84ac96c9a6b9',
        text: 'Order baru layanan truk <span>No. Pesanan LT-202108030021</span> oleh <b>BUDI JAYA SEJAHTERA ABADI</b>menggunakan truk milik <b>BINTANG EXPRESS</b> dari <b>Kec. Cibeunying Kidul</b> menuju <b>Malang</b> nilai transaksi <b>Rp500.000,00</b>',
        type: 'order-created'
      },
    ],
    fetchData: jest.fn(),
    meta: ''
  };
});

describe('src/components/elements/Notification', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Notification {...defaultProps} />);
    defaultProps.handleShow();
    expect(tree).toMatchSnapshot();
  });

  test('handle Close Notif', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Notification {...defaultProps} />);
    const WrapCloseNotif = tree.props.children[0].type;
    const _handleSetActiveTab = tree.props.onMouseLeave;
    _handleSetActiveTab(false);
    expect(WrapCloseNotif).toBe('div');
  });


  test('handle Goto Order Detail', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Notification {...defaultProps}  />);
    const WrapGotoOrderDetail = tree.props.children[1].props.children[1]
      .props.children.props.children[0].key;

    const _handleGoto = tree.props.children[1].props.children[1]
      .props.children.props.children[0].props.onClick;

    const textNotif = {
      createdAt: '2021-01-08',
      deliveryDetailId: '7914723e-799e-417b-aab7-cfeb5b98a7bf',
      isClicked: false,
      isDeleted: false,
      messageId: '8af7980b-465b-4450-affa-b48509b21bf4',
      text: 'Order baru layanan truck <span>LT-202101080055</span> dari <b>undefined</b> menggunakan truk milik ↵  <b>PT AZZAM LOGISTICS</b> dari <b>undefined</b> menuju <b>{originToDestination}</b> nilai transaksi <b>Rpundefined</b>',
      type: 'order-created'
    };

    _handleGoto(textNotif);
    expect(WrapGotoOrderDetail).toBe('0');
  });
});
