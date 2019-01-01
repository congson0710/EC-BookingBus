import React, { Component } from 'react';
import { TYPE_PAYMENT } from '../common/const';
import PaypalButton from './PaypalButton';

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
          cardPayment: false
        }
      });
    } else {
      this.setState({
        accordion: {
          cashPayment: false,
          cardPayment: true
        }
      });
    }
  };
  render() {
    const { accordion } = this.state;
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
                    <td>Trần Mạc Tiên</td>
                  </tr>
                  <tr>
                    <td>Họ tên:</td>
                    <td>Trần Mạc Tiên</td>
                  </tr>
                  <tr>
                    <td>Họ tên:</td>
                    <td>Trần Mạc Tiên</td>
                  </tr>
                  <tr>
                    <td>Họ tên:</td>
                    <td>Trần Mạc Tiên</td>
                  </tr>
                  <tr>
                    <td>Họ tên:</td>
                    <td>Trần Mạc Tiên</td>
                  </tr>
                  <tr>
                    <td>Họ tên:</td>
                    <td>Trần Mạc Tiên</td>
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

export default PaymentComponent;
