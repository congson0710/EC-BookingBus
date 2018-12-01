import React from 'react';
import get from 'lodash/fp/get';

const PureSelect = ({ defaultValue, className, role, input }) => (
  <select
    className={className}
    onChange={get('onChange')(input) || get('value')(input)}
  >
    <option value={get('CLIENT')(role)}>Khách hàng</option>
    <option value={get('COMPANY')(role)}>Nhà xe</option>
  </select>
);

export default PureSelect;
