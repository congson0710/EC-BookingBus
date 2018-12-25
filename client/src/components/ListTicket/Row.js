import React from 'react';
import eq from 'lodash/fp/eq';
import get from 'lodash/fp/get';
import flow from 'lodash/fp/flow';
import { connect } from 'react-redux';
import Spinner from 'react-md-spinner';

import { isBookingSelector } from '../../redux/selectors/bookingSelectors';
import { bookTicketThunkCreator } from '../../redux/actions/bookingAction';

const TICKET_STATUS = 'SOLD';
const isTicketSold = eq(TICKET_STATUS);
const getBusCompanyName = busRoute =>
  flow(
    get('bus'),
    get('bus_company'),
    get('companyName')
  )(busRoute);

const getStartPlace = busRoute =>
  flow(
    get('startPlace'),
    get('placeName')
  )(busRoute);
const getEndPlace = busRoute =>
  flow(
    get('endPlace'),
    get('placeName')
  )(busRoute);
const styles = {
  spinner: {
    textAlign: 'center'
  }
};

const PureRow = ({
  row: { ticketID, bus_route, status, price },
  bookTicket,
  isBooking
}) => (
  <div>
    {isBooking ? (
      <Spinner size={60} style={styles.spinner} />
    ) : (
      <tr>
        <td>{getBusCompanyName(bus_route)}</td>
        <td>{getStartPlace(bus_route)}</td>
        <td>{getEndPlace(bus_route)}</td>
        <td>{bus_route.seatNumber}</td>
        <td>{bus_route.startTime}</td>
        <td>{price}</td>
        <td>{isTicketSold(status) ? 'Hết vé' : 'Còn vé'}</td>
        <td>
          {!isTicketSold(status) ? (
            <button
              className="btn btn-danger"
              onClick={() => bookTicket({ ticketID })}
            >
              Mua vé
            </button>
          ) : null}
        </td>
      </tr>
    )}
  </div>
);

const connectToRedux = connect(
  state => ({
    isBooking: isBookingSelector(state)
  }),
  dispatch => ({
    bookTicket: flow(
      bookTicketThunkCreator,
      dispatch
    )
  })
)

export default connectToRedux(PureRow);
