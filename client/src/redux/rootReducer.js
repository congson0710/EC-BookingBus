import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { userReducer } from './reducers/userReducer';

export const rootReducer = combineReducers({
  form: reduxFormReducer
});
