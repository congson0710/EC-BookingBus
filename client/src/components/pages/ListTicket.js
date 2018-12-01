import React, { Component } from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import ListTicketComponent from '../ListTicketComponent';

class ListTicketPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Menu />
        <ListTicketComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ListTicketPage;
