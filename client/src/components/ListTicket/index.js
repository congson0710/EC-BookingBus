import React from 'react';
import { connect } from 'react-redux';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import flow from 'lodash/fp/flow';

import ListTicketTable from './Table';
import { fetchListTicketThunkCreator } from '../../redux/actions/bookingAction';

const columns = [
  {
    name: 'Nhà xe',
    type: 'col'
  },
  {
    name: 'Thời gian đi',
    type: 'col'
  },
  {
    name: 'Thời gian đến',
    type: 'col'
  },
  {
    name: 'Loại vé',
    type: 'col'
  },
  {
    name: 'Giá vé',
    type: 'col'
  },
  {
    name: '',
    type: 'actionCell'
  }
];

const rows = [
  {
    busCompanyName: 'Thành Bưởi',
    startDay: '5/12/2018',
    endDay: '5/12/2018',
    ticketKind: 'Xe giường nằm',
    price: '220000'
  },
  {
    busCompanyName: 'Thành Bưởi',
    startDay: '5/12/2018',
    endDay: '5/12/2018',
    ticketKind: 'Xe giường nằm',
    price: '220000'
  },
  {
    busCompanyName: 'Thành Bưởi',
    startDay: '5/12/2018',
    endDay: '5/12/2018',
    ticketKind: 'Xe giường nằm',
    price: '220000'
  }
];

const PureListTicket = () => (
  <div className="body-section">
    <div className="list-ticket-container">
      <div className="container">
        <h1 className="text-white text-center mb-5">
          Danh sách vé ngày 11/11/2019
        </h1>
        <ListTicketTable columns={columns} rows={rows} />
      </div>
    </div>
  </div>
);

const connectToRedux = connect(
  null,
  dispatch => ({
    fetchListTicket: flow(
      fetchListTicketThunkCreator,
      dispatch
    )
  })
);

const lifecycleHOC = lifecycle({
  componentDidMount() {
    this.props.fetchListTicket();
  }
});

const enhance = compose(
  connectToRedux,
  lifecycleHOC
);

export default enhance(PureListTicket);
