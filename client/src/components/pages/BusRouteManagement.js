import React, { Component } from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import CheckTicketComponent from '../CheckTicketComponent';

class BookingTicket extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <CheckTicketComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default BookingTicket;
