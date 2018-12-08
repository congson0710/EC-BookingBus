import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

const UserOnly = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
    true ? (
      <Component {...props} />
    ) : (
      <Redirect to='/dang-nhap' />
    )
  )} />
);

export default UserOnly;