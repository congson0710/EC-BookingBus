import {connect} from 'react-redux';
import {withProps} from 'recompose';
import React, {Component} from 'react';
import compose from 'recompose/compose';
import flow from 'lodash/fp/flow';
import lifecycle from 'recompose/lifecycle';
import get from 'lodash/fp/get';
import { TYPE_PAYMENT } from '../common/const';
import PaypalButton from './PaypalButton';

import {TYPE_PAYMENT} from '../common/const';
import {fetchListBookedTicketSelector} from '../redux/selectors/userSelectors.js';
import {fetchListBookedTicketThunkCreator} from '../redux/actions/userAction.js';
import {getUserInfo} from '../redux/share';

const getBusCompanyName = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('bus'),
    get('bus_company'),
    get('companyName'),
  )(rowData);

const getStartPlace = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('startPlace'),
    get('placeName'),
  )(rowData);

const getEndPlace = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('endPlace'),
    get('placeName'),
  )(rowData);

const getSeatNumber = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('seatNumber'),
  )(rowData);

const getPrice = rowData =>
  flow(
    get('ticket'),
    get('price'),
  )(rowData);

const getStatus = rowData =>
  flow(
    get('ticket'),
    get('status'),
  )(rowData);

const getTime = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('startTime'),
  )(rowData);

const getTicketID = rowData =>
  flow(
    get('ticket'),
    get('ticketID'),
  )(rowData);

class PaymentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: {
        cashPayment: false,
        cardPayment: false
      }
    };
  }
  _handleChangePayment = e => {
    const value = parseInt(e.target.value);
    if (value === TYPE_PAYMENT.CASH) {
      this.setState({
        accordion: {
          cashPayment: true,
          cardPayment: false,
        },
      });
    } else {
      this.setState({
        accordion: {
          cashPayment: false,
          cardPayment: true,
        },
      });
    }
  };
  render() {
    const {accordion} = this.state;
    const {user} = this.props;
    const {bookedTicket} = this.props;
    return (
      <div className="body-section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              <h3 className="text-white" style={{ fontSize: '18px' }}>
                Vui lòng chọn hình thức thanh toán để hoàn tất việc đặt vé:
              </h3>
              <div className="accordion">
                <div className="accordion__title">
                  <label className="pretty p-default d-block payment-checkbox m-0">
                    <input
                      name="payment"
                      type="radio"
                      value={TYPE_PAYMENT.CASH}
                      onChange={this._handleChangePayment}
                    />
                    <div className="state">
                      <label>Thanh toán tiền mặt</label>
                    </div>
                  </label>
                </div>
                <div
                  className={`accordion__body ${
                    accordion.cashPayment ? 'show' : ''
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore ab laboriosam impedit in nulla! Ipsa corrupti nesciunt
                  corporis, minus ducimus accusamus incidunt sint unde
                  necessitatibus iste impedit explicabo recusandae accusantium.
                </div>
              </div>
              <div className="accordion">
                <div className="accordion__title">
                  <label className="pretty p-default d-block payment-checkbox m-0">
                    <input
                      name="payment"
                      type="radio"
                      value={TYPE_PAYMENT.CARD}
                      onChange={this._handleChangePayment}
                    />
                    <div className="state">
                      <label>Thanh toán bằng thẻ quốc tế Paypal</label>
                    </div>
                  </label>
                </div>
                <div
                  className={`accordion__body ${
                    accordion.cardPayment ? 'show' : ''
                  }`}
                >
                  <PaypalButton total={8.00} onSuccess={(payment) => console.log(payment)}/>
                </div>
              </div>
            </div>
            <div className="col-4">
              <table className="table table-custom no-border">
                <tbody>
                  <tr>
                    <td>Họ tên:</td>
                    <td>{user.userName}</td>
                  </tr>
                  <tr>
                    <td>Số điện thoại:</td>
                    <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td>Hãng xe:</td>
                    <td>{getBusCompanyName(bookedTicket)}</td>
                  </tr>
                  <tr>
                    <td>Tuyến đường:</td>
                    <td>
                      {getStartPlace(bookedTicket)}-{getEndPlace(bookedTicket)}
                    </td>
                  </tr>
                  <tr>
                    <td>Điểm đón:</td>
                    <td>{getStartPlace(bookedTicket)}</td>
                  </tr>
                  <tr>
                    <td>Điểm trả:</td>
                    <td>{getEndPlace(bookedTicket)}</td>
                  </tr>
                  <tr>
                    <td>Giờ khởi hành:</td>
                    <td>{getTime(bookedTicket)}</td>
                  </tr>
                  <tr>
                    <td>Số ghế:</td>
                    <td>{getSeatNumber(bookedTicket)}</td>
                  </tr>
                  <tr>
                    <td>Giá:</td>
                    <td>{getPrice(bookedTicket)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const withLifecycleHOC = lifecycle({
  componentDidMount() {
    this.props.fetchListBookedTicket();
  },
});

const connectToRedux = connect(
  state => ({
    listBookedTicket: fetchListBookedTicketSelector(state),
  }),
  dispatch => ({
    fetchListBookedTicket: flow(
      fetchListBookedTicketThunkCreator,
      dispatch,
    ),
  }),
);

const prepareProps = withProps(({listBookedTicket}) => ({
  bookedTicket: listBookedTicket ? listBookedTicket[0] : {},
  user: getUserInfo(),
}));

const enhance = compose(
  connectToRedux,
  prepareProps,
  withLifecycleHOC,
);

export default enhance(PaymentComponent);
