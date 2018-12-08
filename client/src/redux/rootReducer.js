import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { userReducer } from './reducers/userReducer';
import SEARCH_REDUCER from './reducers/searchingReducer';

export const rootReducer = combineReducers({
  form: reduxFormReducer,
  userReducer,
  SEARCH_REDUCER
});
