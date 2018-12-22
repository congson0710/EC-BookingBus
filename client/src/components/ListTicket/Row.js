import React from 'react';
import eq from 'lodash/fp/eq';
import get from 'lodash/fp/get';
import flow from 'lodash/fp/flow';

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

const PureRow = ({ row: { ticketID, bus_route, status, price } }) => (
  <tr>
    <td>{getBusCompanyName(bus_route)}</td>
    <td>{getStartPlace(bus_route)}</td>
    <td>{getEndPlace(bus_route)}</td>
    <td>{bus_route.seatNumber}</td>
    <td>{price}</td>
    <td>{isTicketSold(status) ? 'Hết vé' : 'Còn vé'}</td>
    <td>
      {!isTicketSold(status) ? (
        <button className="btn btn-danger">Mua vé</button>
      ) : null}
    </td>
  </tr>
);

export default PureRow;
