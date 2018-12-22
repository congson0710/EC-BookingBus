import { rawSelectorCreator } from '../share';

import {
  START_LIST_PLACE,
  END_LIST_PLACE,
  FILTER_LIST_PLACE,
  SEARCH_TICKET
} from '../reducers/_reducerSectionNames';

export const fetchStartListPlaceDataSelector = rawSelectorCreator(
  'SEARCH_REDUCER',
  START_LIST_PLACE
)('data');

export const fetchEndListPlaceDataSelector = rawSelectorCreator(
  'SEARCH_REDUCER',
  END_LIST_PLACE
)('data');

export const reFetchListPlaceDataSelector = rawSelectorCreator(
  'SEARCH_REDUCER',
  FILTER_LIST_PLACE
)('data');

export const searchTicketDataSelector = rawSelectorCreator(
  'SEARCH_REDUCER',
  SEARCH_TICKET
)('data');

export const isSearchingTicketSelector = rawSelectorCreator(
  'SEARCH_REDUCER',
  SEARCH_TICKET
)('isLoading');
