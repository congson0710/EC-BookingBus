import React from 'react';
import get from 'lodash/fp/get';
import {connect} from 'react-redux';
import flow from 'lodash/fp/flow';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import eq from 'lodash/fp/eq';

import {fetchListBookedTicketThunkCreator} from '../../../redux/actions/userAction';
import {fetchListBookedTicketSelector} from '../../../redux/selectors/userSelectors';

const columns = [
  {
    name: 'Nhà xe',
    type: 'col',
  },
  {
    name: 'Nơi đi',
    type: 'col',
  },
  {
    name: 'Nơi đến',
    type: 'col',
  },
  {
    name: 'Số ghế',
    type: 'col',
  },
  {
    name: 'Thời gian',
    type: 'col',
  },
  {
    name: 'Giá vé',
    type: 'col',
  },
  {
    name: 'Tình trạng',
    type: 'col',
  },
  {
    name: '',
    type: 'actionCell',
  },
];

const getBusCompanyName = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('bus'),
    get('bus_company'),
    get('companyName'),
  )(rowData);

const getStartPlace = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('startPlace'),
    get('placeName'),
  )(rowData);

const getEndPlace = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('endPlace'),
    get('placeName'),
  )(rowData);

const getSeatNumber = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('seatNumber'),
  )(rowData);

const getPrice = rowData =>
  flow(
    get('ticket'),
    get('price'),
  )(rowData);

const getStatus = rowData =>
  flow(
    get('ticket'),
    get('status'),
  )(rowData);

const SOLD = 'SOLD';
const isBookedTicket = status => eq(SOLD)(status);

const getTime = rowData =>
  flow(
    get('ticket'),
    get('bus_route'),
    get('startTime'),
  )(rowData);

const Row = ({rowData}) => (
  <tr>
    <td>{getBusCompanyName(rowData)}</td>
    <td>{getStartPlace(rowData)}</td>
    <td>{getEndPlace(rowData)}</td>
    <td>{getSeatNumber(rowData)}</td>
    <td>{getTime(rowData)}</td>
    <td>{getPrice(rowData)}</td>
    <td>
      {flow(
        getStatus,
        isBookedTicket,
      )(rowData)
        ? 'Đã đặt'
        : 'Chưa đặt'}
    </td>
    <td>
      {flow(
        getStatus,
        isBookedTicket,
      )(rowData) ? (
        <button className="btn btn-danger">Hủy vé</button>
      ) : null}
    </td>
  </tr>
);

const ColumnHeader = () => (
  <tr>
    {columns.map(column => (
      <td>{get('name')(column)}</td>
    ))}
  </tr>
);

const PureHistory = ({listBookedTicket}) => (
  <table className="table table-custom">
    <tbody>
      <ColumnHeader />
      {listBookedTicket &&
        listBookedTicket.map(bookedTicket => (
          <Row key={Math.random()} rowData={bookedTicket} />
        ))}
    </tbody>
  </table>
);

const connectToRedux = connect(
  state => ({
    listBookedTicket: fetchListBookedTicketSelector(state),
  }),
  dispatch => ({
    fetchListBookedTicket: flow(
      fetchListBookedTicketThunkCreator,
      dispatch,
    ),
  }),
);

const withLifecycleHOC = lifecycle({
  componentDidMount() {
    this.props.fetchListBookedTicket();
  },
});

const enhance = compose(
  connectToRedux,
  withLifecycleHOC,
);

export default enhance(PureHistory);
