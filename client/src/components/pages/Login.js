import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../Menu';
import Footer from '../Footer';
import LoginForm from '../Login/LoginForm';

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Menu />
        <LoginForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(LoginPage);
