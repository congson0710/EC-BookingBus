import {rawSelectorCreator} from '../share';
import {FETCH_LIST_BOOKED_TICKET} from '../reducers/_reducerSectionNames';

export const fetchListBookedTicketSelector = rawSelectorCreator(
  'USER_REDUCER',
  FETCH_LIST_BOOKED_TICKET,
)('data');

export const isFetchingListBookedTicket = rawSelectorCreator(
  'USER_REDUCER',
  FETCH_LIST_BOOKED_TICKET,
)('isLoading');
