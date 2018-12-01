import get from 'lodash/fp/get';

import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from '../actions/actionsTypes';

const initialState = {
  userRegister: {
    userData: {},
    isLoading: false,
    error: {}
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST: {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          isLoading: true
        }
      };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          userData: get('payload')(action)
        }
      };
    }
    case USER_REGISTER_FAIL: {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          error: get('payload')(action)
        }
      };
    }
    default:
      break;
  }
};
