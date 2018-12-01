import React, { Fragment } from 'react';
import get from 'lodash/fp/get';

const PureField = ({ label, type, className, required, input }) => (
  <Fragment>
    <label className="mt-3 auth-form__label" htmlFor="">
      {label}
    </label>
    <input
      required={required}
      type={type}
      className={className}
      onChange={get('onChange')(input)}
    />
  </Fragment>
);

export default PureField;
