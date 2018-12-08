import { FETCH_LIST_PLACE } from './actionsTypes';
import { thunkBodyCreator } from '../share';

export const fetchListPlaceThunkCreator = () => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: FETCH_LIST_PLACE,
    route: '/api/list-place',
    data: {},
    type: 'get'
  });
};
