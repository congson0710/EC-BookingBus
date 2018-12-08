import { reducerCreator } from '../share/index';
import { SEARCH_TICKET, FETCH_LIST_TICKET } from '../actions/actionsTypes';
import { genReducerPath } from '../share/utils';

export const searchTicketReducer = reducerCreator(
  SEARCH_TICKET,
  genReducerPath(SEARCH_TICKET)
);

export const fetchListTicketReducer = reducerCreator(
  FETCH_LIST_TICKET,
  genReducerPath(FETCH_LIST_TICKET)
);

const bookingReducerPaths = {
  [SEARCH_TICKET]: genReducerPath(SEARCH_TICKET),
  [FETCH_LIST_TICKET]: genReducerPath(FETCH_LIST_TICKET)
};

export default bookingReducerPaths;
