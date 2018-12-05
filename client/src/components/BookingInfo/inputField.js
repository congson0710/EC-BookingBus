import React, { Fragment } from 'react';

const PureInputField = ({ label, required, type }) => (
  <Fragment>
    <label className="mt-3 auth-form__label" htmlFor="">
      {label}
    </label>
    <input required={required} type={type} className="find_input" />
  </Fragment>
);

export default PureInputField;
