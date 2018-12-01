import React from 'react';
import get from 'lodash/fp/get';

const PureSelect = ({ className, role }) => (
  <select className={className} defaultValue={get('CLIENT')(role)}>
    <option value={get('CLIENT')(role)}>Khách hàng</option>
    <option value={get('COMPANY')(role)}>Nhà xe</option>
  </select>
);

export default PureSelect;
