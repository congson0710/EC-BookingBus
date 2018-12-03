import { thunkBodyCreator } from '../share';

export const searchingThunkCreator = searchData => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: 'SearchTicket',
    route: '/api/search',
    data: searchData,
    type: 'post'
  });
};

export const fetchListTicketThunkCreator = () => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: 'FetchListTicket',
    route: '/api/list-ticket-ket',
    data: {},
    type: 'get'
  });
};
