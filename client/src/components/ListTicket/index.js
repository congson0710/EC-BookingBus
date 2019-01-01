import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import queryString from 'query-string';
import compose from 'recompose/compose';
import {withRouter} from 'react-router';
import Spinner from 'react-md-spinner';

import ListTicketTable from './Table';
import {isSearchingTicketSelector} from '../../redux/selectors/searchingSelectors.js';
import {isBookingSelector} from '../../redux/selectors/bookingSelectors.js';

const PureListTicket = ({location, isSearching, isBooking}) => {
  const day = moment(
    moment(queryString.parse(location.search).startDay, 'MM/DD/YYYY'),
  ).format('DD/MM/YYYY');
  return (
    <div className="body-section">
      <div className="list-ticket-container">
        <div className="container">
          <h1 className="text-white text-center mb-5">
            {`Danh sách vé ngày ${day}`}
          </h1>
          {isBooking ? (
            <Spinner size={60} style={{textAlign: 'center'}} />
          ) : (
            <ListTicketTable />
          )}
        </div>
      </div>
    </div>
  );
};

const connectToRedux = connect(state => ({
  isSearching: isSearchingTicketSelector(state),
  isBooking: isBookingSelector(state),
}));

const enhance = compose(
  connectToRedux,
  withRouter,
);

export default enhance(PureListTicket);
