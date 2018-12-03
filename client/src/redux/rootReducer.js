import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { userReducer } from './reducers/userReducer';
import {
  searchTicketReducer,
  fetchListTicketReducer
} from './reducers/bookingReducer';

export const rootReducer = combineReducers({
  form: reduxFormReducer,
  // userReducer,
  searchTicketReducer,
  fetchListTicketReducer
});
