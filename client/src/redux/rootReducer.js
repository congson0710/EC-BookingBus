import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import get from 'lodash/fp/get';

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
  [get(SEARCH_TICKET)(bookingReducerPaths)]: searchTicketReducer,
  [get(FETCH_LIST_TICKET)(bookingReducerPaths)]: fetchListTicketReducer,
  [get(FETCH_LIST_PLACE)(searchingReducerPaths)]: fetchListPlaceReducer
});
