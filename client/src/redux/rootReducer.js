import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

import {userReducer} from './reducers/userReducer';
import SEARCH_REDUCER from './reducers/searchingReducer';
import BOOK_REDUCER from './reducers/bookingReducer';
import USER_REDUCER from './reducers/userReducer';

export const rootReducer = combineReducers({
  form: reduxFormReducer,
  userReducer,
  SEARCH_REDUCER,
  BOOK_REDUCER,
  USER_REDUCER,
});
