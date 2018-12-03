import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import flow from 'lodash/fp/flow';

import inputField from './inputField';
import { loginThunkCreator } from '../../redux/actions/userAction';

const FORM_NAME = 'EcBooking/LoginForm';
const classNames = {
  label: 'mt-3 auth-form__label',
  input: 'find_input'
};

const PureLoginForm = ({ handleSubmit }) => (
  <div className="auth-form-wrapper">
    <div className="container">
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="userName"
          component={inputField}
          label="Tên đăng nhập"
          inputClassName={classNames.input}
          labelClassName={classNames.label}
          inputType="email"
          required
        />
        <Field
          name="userPassword"
          component={inputField}
          label="Mật khẩu"
          inputClassName={classNames.input}
          labelClassName={classNames.label}
          inputType="password"
          required
        />
        <div className="text-center">
          <button className="mt-5 button main_button">Đăng nhập</button>
        </div>
      </form>
    </div>
  </div>
);

const connectToRedux = connect(
  null,
  dispatch => ({
    onLoginRequest: flow(
      loginThunkCreator,
      dispatch
    )
  })
);

const prepareProps = mapProps(({ onLoginRequest, ...otherProps }) => ({
  onSubmit: data => {
    onLoginRequest(data);
  },
  ...otherProps
}));

const withReduxForm = reduxForm({ form: FORM_NAME });

const enhance = compose(
  connectToRedux,
  prepareProps,
  withReduxForm
);

export default enhance(PureLoginForm);
