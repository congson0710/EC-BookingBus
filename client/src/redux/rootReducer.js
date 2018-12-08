import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { userReducer } from './reducers/userReducer';
import bookingReducerPaths, {
  searchTicketReducer,
  fetchListTicketReducer
} from './reducers/bookingReducer';
import searchingReducerPaths, {
  fetchListPlaceReducer
} from './reducers/searchingReducer';
import {
  FETCH_LIST_PLACE,
  FETCH_LIST_TICKET,
  SEARCH_TICKET
} from './actions/actionsTypes';

export const rootReducer = combineReducers({
  form: reduxFormReducer,
  userReducer,
  [bookingReducerPaths[SEARCH_TICKET]]: searchTicketReducer,
  [bookingReducerPaths[FETCH_LIST_TICKET]]: fetchListTicketReducer,
  [searchingReducerPaths[FETCH_LIST_PLACE]]: fetchListPlaceReducer
});
