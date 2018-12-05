import { thunkBodyCreator } from '../share';
import { SEARCH_TICKET, FETCH_LIST_TICKET } from './actionsTypes';

export const searchingThunkCreator = searchData => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: SEARCH_TICKET,
    route: '/api/search',
    data: searchData,
    type: 'post'
  });
};

export const fetchListTicketThunkCreator = () => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: FETCH_LIST_TICKET,
    route: '/api/list-ticket-ket',
    data: {},
    type: 'get'
  });
};
