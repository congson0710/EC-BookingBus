import { FETCH_LIST_PLACE, SET_LIST_PLACE } from './actionsTypes';
import { thunkBodyCreator, setRawDataActionCreator } from '../share';

export const fetchListPlaceThunkCreator = (requestData = {}) => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: FETCH_LIST_PLACE,
    route: '/api/list-place',
    data: requestData,
    type: 'get'
  });
};

export const setFetchListAC = setRawDataActionCreator(SET_LIST_PLACE);
