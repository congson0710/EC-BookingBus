import React, { Component } from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import Register from '../Register';

class RegisterPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Register />
        <Footer />
      </React.Fragment>
    );
  }
}

export default RegisterPage;
