import React, { Fragment } from 'react';
import get from 'lodash/fp/get';

const PureSelect = ({
  defaultValue,
  defaultLabel,
  className,
  label,
  input,
  dataSource,
  required = false
}) => (
  <div className="find_item">
    <div className="text-left">{label}</div>
    <select
      defaultValue={defaultValue}
      required={required}
      className={className}
      onChange={get('onChange')(input) || get('value')(input)}
    >
      <option value={-1} disabled>{defaultLabel}</option>
      {dataSource &&
        dataSource.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
    </select>
  </div>
);

export default PureSelect;
