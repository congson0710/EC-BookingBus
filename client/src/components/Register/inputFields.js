import React, { Fragment } from 'react';

const PureField = ({ label, type, className, required }) => (
  <Fragment>
    <label className="mt-3 auth-form__label" htmlFor="">
      {label}
    </label>
    <input required={required} type={type} className={className} />
  </Fragment>
);

export default PureField;
