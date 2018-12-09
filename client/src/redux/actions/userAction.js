import axios, { setToken } from '../../axios';
import { history } from '../index';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LOGOUT
} from './actionsTypes';
import Auth from '../../lib/auth';

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

export const loginThunkCreator = loginData => async dispatch => {
  dispatch({
    type: USER_LOGIN_REQUEST
  });

  try {
    const response = await axios.post('/api/login', loginData);
    if (response) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response.data
      });
      setToken(response.data.token);
      localStorage.setItem('role', response.data.roleID);
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error
    });
    console.error(error);
  }
};

export const logoutThunkCreator = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  console.log('hihi')
  Auth.logout();
}