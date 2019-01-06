import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import axios from '../../axios';
import {history} from '../index.js';

import {thunkBodyCreator} from '../share';
import {SEARCH_TICKET, UPDATE_PAYMENT_STATUS} from './actionsTypes';
import {getUserInfo} from '../share';

export const fetchListTicketThunkCreator = requestData => dispatch => {
  const genQueryRoute = requestData =>
    `/api/search-ticket?startPlace=${requestData.startPlace}&endPlace=${
      requestData.endPlace
    }&startDay=${requestData.startDay}`;

  thunkBodyCreator({
    dispatch,
    action: SEARCH_TICKET,
    route: genQueryRoute(requestData),
    data: requestData,
    type: 'get',
  });
};

export const bookTicketThunkCreator = (requestData = {}) => async dispatch => {
  const user = getUserInfo();
  if (!user) {
    return history.push('/dang-nhap');
  }

  const data = {
    ...requestData,
    userID: user.userID,
  };

  try {
    const response = await axios.post('/api/book-ticket/', data);
    if (!isNil(response)) {
      const ticketID = get('data.ticketID')(response);
      history.push(`thanh-toan?ticketID=${ticketID}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export const updatePaymentStatusThunkCreator = (
  requestData = {},
) => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: UPDATE_PAYMENT_STATUS,
    route: '/api/update-payment-status',
    data: requestData,
    type: 'post',
  });
};
