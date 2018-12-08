import get from 'lodash/fp/get';

import { rawDataSelectorCreator } from '../share';
import searchingReducerPaths from '../reducers/searchingReducer';
import { FETCH_LIST_PLACE } from '../actions/actionsTypes';

export const fetchListPlaceDataSelector = rawDataSelectorCreator(
  get(FETCH_LIST_PLACE)(searchingReducerPaths)
);
