import { thunkBodyCreator } from '../share';
import { FETCH_LIST_TICKET } from './actionsTypes';

export const fetchListTicketThunkCreator = () => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: FETCH_LIST_TICKET,
    route: '/api/list-ticket-ket',
    data: {},
    type: 'get'
  });
};
