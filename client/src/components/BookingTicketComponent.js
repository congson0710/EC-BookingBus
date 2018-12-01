import React, { Component } from 'react';

class BookingTicketComponent extends Component {
  render() {
    return (
      <div className="body-section">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h1 className="text-white text-center">Đặt vé</h1>
          <form>
            <label className="mt-3 auth-form__label" htmlFor="">
              Họ tên
            </label>
            <input required type="text" className="find_input" />
            <label className="mt-3 auth-form__label" htmlFor="">
              Số điện thoại
            </label>
            <input required type="text" className="find_input" />
            <label className="mt-3 auth-form__label" htmlFor="">
              Ghi chú
            </label>
            <textarea
              className="textarea"
              name="note"
              id=""
              cols="30"
              rows="6"
              placeholder="Ghi chú"
            />
            <div className="text-center">
              <button className="mt-5 button main_button">Tiếp tục</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingTicketComponent;
