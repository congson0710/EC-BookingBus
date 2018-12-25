import React from 'react';
import { connect } from 'react-redux';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import flow from 'lodash/fp/flow';
import Spinner from 'react-md-spinner';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import moment from 'moment';

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

const PureListTicket = ({ isSearching, listTicket, location }) => {
  const day = moment(moment(queryString.parse(location.search).startDay, 'MM/DD/YYYY')).format('DD/MM/YYYY');
  return (
    <div className="body-section">
      <div className="list-ticket-container">
        <div className="container">
          <h1 className="text-white text-center mb-5">
            {`Danh sách vé ngày ${day}`}
          </h1>
          {isSearching ? (
            <div style={styles.spinnerStyle}>
              <Spinner size={50} />
            </div>
          ) : (
            <ListTicketTable columns={columns} rows={listTicket} />
          )}
        </div>
      </div>
    </div>
  );
};

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
    const params = queryString.parse(this.props.location.search);
    this.props.fetchListTicket(params);
  }
});

const enhance = compose(
  withRouter,
  connectToRedux,
  lifecycleHOC
);

export default enhance(PureListTicket);
