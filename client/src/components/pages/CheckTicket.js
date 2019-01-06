import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-md-spinner';

import Menu from '../Menu';
import Footer from '../Footer';
import CheckTicketComponent from '../CheckTicketComponent';
import {isCancelingTicketSelector} from '../../redux/selectors/userSelectors.js';

class BookingTicket extends Component {
  render() {
    const {isCancelingTicket} = this.props;
    return (
      <React.Fragment>
        <Menu />
        {isCancelingTicket ? <Spinner /> : <CheckTicketComponent />}
        <Footer />
      </React.Fragment>
    );
  }
}

const connectToRedux = connect(
  state => ({
    isCancelingTicket: isCancelingTicketSelector(state),
  }),
  null,
);

export default connectToRedux(BookingTicket);
