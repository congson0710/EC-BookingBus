import {rawSelectorCreator} from '../share';
import {
  FETCH_LIST_BOOKED_TICKET,
  CANCEL_TICKET,
  FETCH_LIST_PAID_TICKET,
} from '../reducers/_reducerSectionNames';

export const fetchListBookedTicketSelector = rawSelectorCreator(
  'USER_REDUCER',
  FETCH_LIST_BOOKED_TICKET,
)('data');

export const isFetchingListBookedTicket = rawSelectorCreator(
  'USER_REDUCER',
  FETCH_LIST_BOOKED_TICKET,
)('isLoading');

export const isCancelingTicketSelector = rawSelectorCreator(
  'USER_REDUCER',
  CANCEL_TICKET,
)('isLoading');

export const listPaidTicketSelector = rawSelectorCreator(
  'USER_REDUCER',
  FETCH_LIST_PAID_TICKET,
)('data');
