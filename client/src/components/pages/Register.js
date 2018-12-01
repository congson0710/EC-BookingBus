import React, { Component } from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import RegisterForm from '../RegisterForm';

class RegisterPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Menu />
        <RegisterForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default RegisterPage;
