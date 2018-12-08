import { rawDataSelectorCreator } from '../share';
import searchingReducerPaths from '../reducers/searchingReducer';
import { FETCH_LIST_PLACE } from '../actions/actionsTypes';

const fetchListPlaceDataSelector = rawDataSelectorCreator(
  searchingReducerPaths[FETCH_LIST_PLACE]
);
