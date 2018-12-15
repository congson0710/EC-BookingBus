import { notification } from 'antd';

import axios, { setToken } from '../../axios';
import { history } from '../index';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  FETCH_USER_INFO,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAIL,
  SET_USER_INFO,
  SET_USER_INFO_SUCCESS,
  SET_USER_INFO_FAIL,
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
    const { data } = await axios.post('/api/login', loginData);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });
    setToken(data.token);
    localStorage.setItem('role', data.currentUser.roleID);
    localStorage.setItem('token', data.token);
    history.push('/');
    notification.success({
      message: data.message,
      description: '',
      duration: 2
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message
    });
    notification.error({
      message: 'Login fail',
      description: error.response.data.message,
      duration: 2
    });
  }
};

export const logoutThunkCreator = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  Auth.logout();
};

export const fetchUserInfo = () => async dispatch => {
  dispatch({
    type: FETCH_USER_INFO
  });
  try {
    const data = await Auth.getUserInfo();
    dispatch({
      type: FETCH_USER_INFO_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: FETCH_USER_INFO_FAIL,
      payload: {}
    });
  }
};

export const setUserInfo = data => async dispatch => {
  dispatch({
    type: SET_USER_INFO
  });
  try {
    const userUpdate = await axios.patch('/api/user/update', data);
    dispatch({
      type: SET_USER_INFO_SUCCESS,
      payload: userUpdate.data
    });
    notification.success({
      message: userUpdate.data.message,
      // description: '',
      duration: 2
    });
  } catch (err) {
    dispatch({
      type: SET_USER_INFO_FAIL
    });
    notification.success({
      message: err.response.data.message,
      // description: '',
      duration: 2
    });
  }
};
