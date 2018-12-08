import get from 'lodash/fp/get';

import { rawDataSelectorCreator } from '../share';
import searchingReducerPaths from '../reducers/searchingReducer';
import { LIST_PLACE } from '../reducers/_reducerNames';

export const fetchListPlaceDataSelector = rawDataSelectorCreator(
  get(LIST_PLACE)(searchingReducerPaths)
);
