import React, { Component } from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import PaymentComponent from '../PaymentComponent';

class Payment extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <PaymentComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Payment;
