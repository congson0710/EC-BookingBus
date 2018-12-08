import { FETCH_LIST_PLACE } from '../actions/actionsTypes';
import { reducerCreator } from '../share/index';
import { genReducerPath } from '../share/utils';

export const fetchListPlaceReducer = reducerCreator(
  FETCH_LIST_PLACE,
  genReducerPath(FETCH_LIST_PLACE)
);

const searchingReducerPaths = {
  [FETCH_LIST_PLACE]: genReducerPath(FETCH_LIST_PLACE)
};

export default searchingReducerPaths;
