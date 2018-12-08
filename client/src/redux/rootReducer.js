import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import get from 'lodash/fp/get';

import { LIST_PLACE } from '../redux/reducers/_reducerNames';
import { userReducer } from './reducers/userReducer';
// import bookingReducerPaths, {
//   searchTicketReducer,
//   fetchListTicketReducer
// } from './reducers/bookingReducer';
import searchingReducerPaths, {
  listPlaceReducer
} from './reducers/searchingReducer';

export const rootReducer = combineReducers({
  form: reduxFormReducer,
  userReducer,
  [get(LIST_PLACE)(searchingReducerPaths)]: listPlaceReducer
});
