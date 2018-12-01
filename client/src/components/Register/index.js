import React from 'react';
import { reduxForm } from 'redux-form';
import compose from 'recompose/compose';

import RegisterForm from './RegisterForm';

const FORM_NAME = 'EcBooking/RegisterForm';

const Register = () => (
  <div className="auth-form-wrapper">
    <div className="container">
      <RegisterForm />
    </div>
  </div>
);

const withReduxForm = reduxForm({ form: FORM_NAME });

export default withReduxForm(Register);
