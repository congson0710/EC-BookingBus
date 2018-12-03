import { reducerCreator } from '../share/index';
import { SEARCH_TICKET, FETCH_LIST_TICKET } from '../actions/actionsTypes';

const searchTicketReducerPath = 'EcBooking/SEARCH_TICKET';
const fetchListTicketReducerPath = 'EcBook/FETCH_LIST_TICKET';

export const searchTicketReducer = reducerCreator(
  SEARCH_TICKET,
  searchTicketReducerPath
);

export const fetchListTicketReducer = reducerCreator(
  FETCH_LIST_TICKET,
  fetchListTicketReducerPath
);
