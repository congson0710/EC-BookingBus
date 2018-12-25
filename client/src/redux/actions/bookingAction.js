import { thunkBodyCreator } from '../share';
import { SEARCH_TICKET, BOOK_TICKET } from './actionsTypes';

export const fetchListTicketThunkCreator = (requestData) => dispatch => {
   const genQueryRoute = requestData =>
    `/api/search-ticket?startPlace=${requestData.startPlace}&endPlace=${
      requestData.endPlace
    }&startDay=${requestData.startDay}`;
  thunkBodyCreator({
    dispatch,
    action: SEARCH_TICKET,
    route: genQueryRoute(requestData),
    data: requestData,
    type: 'get'
  });
};

export const bookTicketThunkCreator = (requestData = {}) => dispatch => {
  const { ticketID } = requestData;
  thunkBodyCreator({
    dispatch,
    action: BOOK_TICKET,
    route: `/api/book-ticket/${ticketID}`,
    data: requestData,
    type: 'post'
  });
};
