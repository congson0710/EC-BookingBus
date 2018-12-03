import { thunkBodyCreator } from '../share';

export const searchingThunkCreator = searchData => dispatch => {
  thunkBodyCreator({
    dispatch,
    action: 'SearchTicket',
    route: '/api/search',
    data: searchData,
    type: 'post'
  });
};
