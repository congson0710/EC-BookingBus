import { thunkBodyCreator } from '../share';
import { FETCH_LIST_TICKET, BOOK_TICKET } from './actionsTypes';

export const fetchListTicketThunkCreator = () => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: FETCH_LIST_TICKET,
    route: '/api/list-ticket-ket',
    data: {},
    type: 'get'
  });
};

export const bookTicketThunkCreator = (requestData = {}) => dispatch => {
  const { ticketID, userID } = requestData;
  thunkBodyCreator({
    dispatch,
    action: BOOK_TICKET,
    route: `/api/${userID}/book-ticket/${ticketID}`,
    data: requestData,
    type: 'post'
  });
};
