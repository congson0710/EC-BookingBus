import React, { Fragment } from 'react';

const PureInputField = ({
  label,
  inputType,
  required,
  inputClassName,
  labelClassName,
  input: { onChange }
}) => (
  <Fragment>
    <label className={labelClassName} htmlFor="">
      {label}
    </label>
    <input
      required={required}
      type={inputType}
      className={inputClassName}
      onChange={onChange}
    />
  </Fragment>
);

export default PureInputField;
