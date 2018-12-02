import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import flow from 'lodash/fp/flow';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import mapProps from 'recompose/mapProps';

import RegisterForm from './RegisterForm';
import { registerThunkCreator } from '../../redux/actions/userAction';

const FORM_NAME = 'EcBooking/RegisterForm';

const Register = ({ handleSubmit }) => (
  <div className="auth-form-wrapper">
    <div className="container">
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  </div>
);

const connectToRedux = connect(
  null,
  dispatch => ({
    onRequestRegister: flow(
      registerThunkCreator,
      dispatch
    )
  })
);

const prepareProps = mapProps(({ onRequestRegister, ...otherProps }) => ({
  onSubmit: data => {
    onRequestRegister(data);
  },
  ...otherProps
}));

const withConfig = defaultProps({
  initialValues: {
    userRole: 1
  }
});

const withReduxForm = reduxForm({
  form: FORM_NAME
});

const enhance = compose(
  connectToRedux,
  prepareProps,
  withConfig,
  withReduxForm
);

export default enhance(Register);
