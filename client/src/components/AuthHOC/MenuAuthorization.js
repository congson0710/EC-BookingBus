import React, { Fragment } from 'react';
import Auth from '../../lib/auth';
function MenuAuthorization(props) {
  const { roleAllowed = [], children } = props;
  const isVisible = roleAllowed.length === 0 ? true : roleAllowed.includes(Auth.getUserRole());
  return <Fragment>{isVisible ? children : null}</Fragment>;
}

export default MenuAuthorization;
