import {notification} from 'antd';

import axios, {setToken} from '../../axios';
import {history} from '../index';
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
  LOGOUT,
  CHANGE_PASWORD,
  CHANGE_PASWORD_SUCCESS,
  CHANGE_PASWORD_FAIL,
  FETCH_LIST_BOOKED_TICKET,
  CANCEL_TICKET,
  FETCH_LIST_PAID_TICKET,
} from './actionsTypes';
import Auth from '../../lib/auth';
import {thunkBodyCreator, getUserInfo} from '../share';

export const registerThunkCreator = registerData => async dispatch => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });

  try {
    const response = await axios.post('/api/register', registerData);
    if (response) {
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: response.data,
      });
      history.push('/dang-nhap');
      notification.success({
        message: response.data.message,
        description: '',
        duration: 2,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error,
    });
    notification.error({
      message: 'Register fail',
      description: error.response.data.message,
      duration: 2,
    });
  }
};

export const loginThunkCreator = loginData => async dispatch => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  try {
    const {data} = await axios.post('/api/login', loginData);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    setToken(data.token);
    localStorage.setItem('role', data.currentUser.roleID);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.currentUser));
    history.push('/');
    notification.success({
      message: data.message,
      description: '',
      duration: 2,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message,
    });
    notification.error({
      message: 'Login fail',
      description: error.response.data.message,
      duration: 2,
    });
  }
};

export const logoutThunkCreator = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
  Auth.logout();
};

export const fetchUserInfo = () => async dispatch => {
  dispatch({
    type: FETCH_USER_INFO,
  });
  try {
    const data = await Auth.getUserInfo();
    dispatch({
      type: FETCH_USER_INFO_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_USER_INFO_FAIL,
      payload: {},
    });
  }
};

export const setUserInfo = data => async dispatch => {
  dispatch({
    type: SET_USER_INFO,
  });
  try {
    const userUpdate = await axios.patch('/api/user/update', data);
    dispatch({
      type: SET_USER_INFO_SUCCESS,
      payload: userUpdate.data,
    });
    notification.success({
      message: userUpdate.data.message,
      duration: 2,
    });
  } catch (err) {
    dispatch({
      type: SET_USER_INFO_FAIL,
    });
    notification.error({
      message: err.response.data.message,
      duration: 2,
    });
  }
};

export const updatePassword = data => async dispatch => {
  dispatch({
    type: CHANGE_PASWORD,
  });
  try {
    const response = await axios.patch('/api/user/update', data);
    dispatch({
      type: CHANGE_PASWORD_SUCCESS,
    });
    notification.success({
      message: response.data.message,
      duration: 2,
    });
  } catch (err) {
    dispatch({
      type: CHANGE_PASWORD_FAIL,
    });
    notification.error({
      message: err.response.data.message,
      duration: 2,
    });
  }
};

export const fetchListBookedTicketThunkCreator = (
  requestData = {},
) => dispatch => {
  const user = getUserInfo();
  if (!user) {
    return history.push('/dang-nhap');
  }
  thunkBodyCreator({
    dispatch,
    action: FETCH_LIST_BOOKED_TICKET,
    route: `/api/${user.userID}/list-booked-ticket`,
    data: {},
    type: 'get',
  });
};

export const fetchListPaidTicketThunkCreator = (
  requestData = {},
) => dispatch => {
  const user = getUserInfo();
  if (!user) {
    return history.push('/dang-nhap');
  }
  thunkBodyCreator({
    dispatch,
    action: FETCH_LIST_PAID_TICKET,
    route: `/api/${user.userID}/list-paid-ticket`,
    data: requestData,
    type: 'get',
  });
};

export const cancelTicketThunkCreator = (requestData = {}) => dispatch => {
  const user = getUserInfo();
  if (!user) {
    return history.push('/dang-nhap');
  }
  console.log('request data', requestData);
  thunkBodyCreator({
    dispatch,
    action: CANCEL_TICKET,
    route: `/api/cancel-ticket`,
    data: {...requestData, userID: user.userID},
    type: 'post',
  });
};
