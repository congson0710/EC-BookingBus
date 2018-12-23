import React from 'react';
import { connect } from 'react-redux';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import flow from 'lodash/fp/flow';
import isEmpty from 'lodash/fp/isEmpty';
import Spinner from 'react-md-spinner';

import ListTicketTable from './Table';
import { fetchListTicketThunkCreator } from '../../redux/actions/bookingAction';
import {
  isSearchingTicketSelector,
  searchTicketDataSelector
} from '../../redux/selectors/searchingSelectors';

const columns = [
  {
    name: 'Nhà xe',
    type: 'col'
  },
  {
    name: 'Nơi đi',
    type: 'col'
  },
  {
    name: 'Nơi đến',
    type: 'col'
  },
  {
    name: 'Số ghế',
    type: 'col'
  },
  {
    name: 'Thời gian',
    type: 'col'
  },
  {
    name: 'Giá vé',
    type: 'col'
  },
  {
    name: 'Tình trạng',
    type: 'col'
  },
  {
    name: '',
    type: 'actionCell'
  }
];

const styles = {
  spinnerStyle: {
    textAlign: 'center'
  }
};

const getDay = listTicket =>
  isEmpty(listTicket) ? null : listTicket[0].bus_route.day;

const PureListTicket = ({ isSearching, listTicket }) => (
  <div className="body-section">
    <div className="list-ticket-container">
      <div className="container">
        <h1 className="text-white text-center mb-5">
          {`Danh sách vé ngày ${getDay(listTicket)}`}
        </h1>
        {isSearching ? (
          <div style={styles.spinnerStyle}>
            <Spinner size={60} />
          </div>
        ) : (
          <ListTicketTable columns={columns} rows={listTicket} />
        )}
      </div>
    </div>
  </div>
);

const connectToRedux = connect(
  state => ({
    isSearching: isSearchingTicketSelector(state),
    listTicket: searchTicketDataSelector(state)
  }),
  dispatch => ({
    fetchListTicket: flow(
      fetchListTicketThunkCreator,
      dispatch
    )
  })
);

const lifecycleHOC = lifecycle({
  componentDidMount() {
    // this.props.fetchListTicket();
  }
});

const enhance = compose(
  connectToRedux,
  lifecycleHOC
);

export default enhance(PureListTicket);
