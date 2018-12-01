import axios from '../../axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from './actionsTypes';

export const registerThunkCreator = registerData => async dispatch => {
  dispatch({
    type: USER_REGISTER_REQUEST
  });

  try {
    const response = await axios.post('/api/register', registerData);
    if (response) {
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: response.data
      });
    }
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error
    });
    console.error(error);
  }
};
