import React from 'react';
import { Redirect } from 'react-router';
import Auth from '../../lib/auth';
const WithAuthorization = allowedRoles => WrappedComponent => {
  return class Authorization extends React.Component {
    static defaultProps = {
      unauthorizeRedirect: '/'
    };
    render() {
      if (allowedRoles.includes(Auth.getUserRole())) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Redirect to={this.props.unauthorizeRedirect} />;
      }
    }
  };
};
export default WithAuthorization;