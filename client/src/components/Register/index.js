import React from 'react';
import { reduxForm } from 'redux-form';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';

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
  console.log('data to submin', data);
};

const withReduxForm = reduxForm({ form: FORM_NAME, onSubmit });

const enhance = compose(withReduxForm);

export default enhance(Register);
