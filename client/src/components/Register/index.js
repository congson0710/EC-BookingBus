import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import compose from 'recompose/compose';

import RegisterForm from './RegisterForm';

const FORM_NAME = 'EcBooking/RegisterForm';

const Register = ({ handleSubmit }) => (
  <div className="auth-form-wrapper">
    <div className="container">
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  </div>
);

const onSubmit = data => {
  console.log('data to submit', data);
};

const initialRoleValue = {
  userRole: 1
};

const connectToReduxStore = connect(
  null,
  null
);

const withReduxForm = reduxForm({
  form: FORM_NAME,
  initialValues: initialRoleValue,
  onSubmit
});

const enhance = compose(
  withReduxForm,
  connectToReduxStore
);

export default enhance(Register);
