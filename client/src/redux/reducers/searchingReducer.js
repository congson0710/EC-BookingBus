import { combineReducers } from 'redux';

import {
  START_LIST_PLACE,
  END_LIST_PLACE,
  FILTER_LIST_PLACE
} from './_reducerSectionNames';
import { reducerCreator } from '../share/index';
import { genReducerPath } from '../share/utils';

const startListPlaceReducer = reducerCreator(
  START_LIST_PLACE,
  genReducerPath(START_LIST_PLACE)
);
const endListPlaceReducer = reducerCreator(
  END_LIST_PLACE,
  genReducerPath(END_LIST_PLACE)
);

const filterListPlaceReducer = reducerCreator(
  FILTER_LIST_PLACE,
  genReducerPath(FILTER_LIST_PLACE)
);

const searchReducer = combineReducers({
  [START_LIST_PLACE]: startListPlaceReducer,
  [END_LIST_PLACE]: endListPlaceReducer,
  [FILTER_LIST_PLACE]: filterListPlaceReducer
});

export default searchReducer;
