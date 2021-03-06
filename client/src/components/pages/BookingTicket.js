import React, { Component } from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import BookingTicketComponent from '../BookingInfo/BookingInfo';

class BookingTicket extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <BookingTicketComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default BookingTicket;
