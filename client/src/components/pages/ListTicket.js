import React, {Component} from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import ListTicketComponent from '../ListTicket';

class ListTicketPage extends Component {
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
