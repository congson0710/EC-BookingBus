import {reducerCreator} from '../share/index';
import {BOOK_TICKET} from '../actions/actionsTypes';
import {genReducerPath} from '../share/utils';
import {combineReducers} from 'redux';

const bookTicketReducer = reducerCreator(
  BOOK_TICKET,
  genReducerPath(BOOK_TICKET),
);

const bookingReducerPaths = combineReducers({
  [BOOK_TICKET]: bookTicketReducer,
});

export default bookingReducerPaths;
