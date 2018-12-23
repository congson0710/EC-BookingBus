import { reducerCreator } from '../share/index';
import { BOOK_TICKET } from '../actions/actionsTypes';
import { genReducerPath } from '../share/utils';

const bookTicketReducer = reducerCreator(
  BOOK_TICKET,
  genReducerPath(BOOK_TICKET)
);

const bookingReducerPaths = {
  [BOOK_TICKET]: bookTicketReducer
};

export default bookingReducerPaths;
