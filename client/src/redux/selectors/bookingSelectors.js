import { rawSelectorCreator } from '../share';
import { BOOK_TICKET } from '../reducers/_reducerSectionNames';

export const bookTicketDataSelector = rawSelectorCreator(
  'BOOK_REDUCER',
  BOOK_TICKET
)('data');

export const isBookingSelector = rawSelectorCreator(
  'BOOK_REDUCER',
  BOOK_TICKET
)('isLoading');
