import React from 'react';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import {withRouter} from 'react-router';
import queryString from 'query-string';

import Row from './Row';
import {fetchListTicketThunkCreator} from '../../redux/actions/bookingAction';
import {searchTicketDataSelector} from '../../redux/selectors/searchingSelectors';

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

const PureTable = ({listTicket}) => (
  <div className="table-responsive">
    <table className="table table-custom">
      <tbody>
        <tr>
          {map(column => <th key={Math.random()}>{get('name')(column)}</th>)(
            columns,
          )}
        </tr>
        {map(ticket => <Row key={Math.random()} row={ticket} />)(listTicket)}
      </tbody>
    </table>
  </div>
);

const connectToRedux = connect(
  state => ({
    listTicket: searchTicketDataSelector(state),
  }),
  dispatch => ({
    fetchListTicket: flow(
      fetchListTicketThunkCreator,
      dispatch,
    ),
  }),
);

const lifecycleHOC = lifecycle({
  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    this.props.fetchListTicket(params);
  },
});

const enhance = compose(
  withRouter,
  connectToRedux,
  lifecycleHOC,
);

export default enhance(PureTable);
