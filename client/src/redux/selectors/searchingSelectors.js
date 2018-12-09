import { rawDataSelectorCreator } from '../share';

import {
  START_LIST_PLACE,
  END_LIST_PLACE,
  FILTER_LIST_PLACE
} from '../reducers/_reducerSectionNames';

export const fetchStartListPlaceDataSelector = rawDataSelectorCreator(
  'SEARCH_REDUCER',
  START_LIST_PLACE
);

export const fetchEndListPlaceDataSelector = rawDataSelectorCreator(
  'SEARCH_REDUCER',
  END_LIST_PLACE
);

export const reFetchListPlaceDataSelector = rawDataSelectorCreator(
  'SEARCH_REDUCER',
  FILTER_LIST_PLACE
);
