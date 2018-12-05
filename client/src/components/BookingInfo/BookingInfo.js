import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import compose from 'recompose/compose';

import inputField from './inputField';
import noteField from './noteField';

const FORM_NAME = 'EcBooking/BookingInfo';

const PureBookingInfo = ({ handleSubmit }) => (
  <div className="body-section">
    <div className="container" style={{ maxWidth: '600px' }}>
      <h1 className="text-white text-center">Đặt vé</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="userName"
          component={inputField}
          label="Họ Tên"
          type="text"
          required
        />
        <Field
          name="phone"
          component={inputField}
          label="Số điện thoại"
          type="text"
          required
        />
        <Field name="bookingNote" component={noteField} label="Ghi chú" />
        <div className="text-center">
          <button className="mt-5 button main_button">Tiếp tục</button>
        </div>
      </form>
    </div>
  </div>
);

const connectToRedux = connect(
  null,
  null
);

const withReduxForm = reduxForm({
  form: FORM_NAME,
  onSubmit: data => console.log(data)
});

const enhance = compose(
  connectToRedux,
  withReduxForm
);

export default enhance(PureBookingInfo);
