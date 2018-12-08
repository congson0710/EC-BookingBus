import { LIST_PLACE } from './_reducerNames';
import { reducerCreator } from '../share/index';
import { genReducerPath } from '../share/utils';

export const listPlaceReducer = reducerCreator(
  LIST_PLACE,
  genReducerPath(LIST_PLACE)
);

const searchingReducerPaths = {
  [LIST_PLACE]: genReducerPath(LIST_PLACE)
};

export default searchingReducerPaths;
