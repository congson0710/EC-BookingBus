import React from 'react';

const PureInputField = ({
  placeholder,
  required,
  inputClassName,
  label,
  type,
  input: { onChange }
}) => (
  <div className="find_item">
    <div className="text-left">{label}</div>
    <input
      type={type}
      className={inputClassName}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default PureInputField;
