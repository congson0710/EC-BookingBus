import includes from 'lodash/fp/includes';
import {history} from '../index';
import {FETCH_START_LIST_PLACE, FETCH_END_LIST_PLACE} from './actionsTypes';
import {thunkBodyCreator} from '../share';

export const searchTicketThunkCreator = (requestData = {}) => () => {
  history.push(
    `danh-sach-ve-xe?startPlace=${requestData.startPlace}&endPlace=${
      requestData.endPlace
    }&startDay=${requestData.startDay}`,
  );
};

export const fetchStartListPlaceThunkCreator = (
  requestData = {},
) => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: FETCH_START_LIST_PLACE,
    route: '/api/list-place',
    data: requestData,
    type: 'get',
  });
};

export const fetchEndListPlaceThunkCreator = (requestData = {}) => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: FETCH_END_LIST_PLACE,
    route: '/api/list-place',
    data: requestData,
    type: 'get',
  });
};

export const reFetchPlaceThunkCreator = (requestData = {}) => dispatch => {
  const {nameField} = requestData;
  includes('start')(nameField)
    ? thunkBodyCreator({
        dispatch,
        action: FETCH_END_LIST_PLACE,
        route: '/api/list-place',
        data: requestData,
        type: 'post',
      })
    : thunkBodyCreator({
        dispatch,
        action: FETCH_START_LIST_PLACE,
        route: '/api/list-place',
        data: requestData,
        type: 'post',
      });
};
