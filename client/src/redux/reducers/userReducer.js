import get from 'lodash/fp/get';
import {combineReducers} from 'redux';

import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAIL,
  SET_USER_INFO_SUCCESS,
  SET_USER_INFO_FAIL,
  LOGOUT,
  FETCH_LIST_BOOKED_TICKET,
} from '../actions/actionsTypes';
import {reducerCreator} from '../share';
import {genReducerPath} from '../share/utils';

const initialState = {
  userData: {},
  userRegister: {
    userData: {},
    isLoading: false,
    error: {},
  },
};

const fetchListBookedTicketReducer = reducerCreator(
  FETCH_LIST_BOOKED_TICKET,
  genReducerPath(FETCH_LIST_BOOKED_TICKET),
);

const userSettingReducer = combineReducers({
  [FETCH_LIST_BOOKED_TICKET]: fetchListBookedTicketReducer,
});

export default userSettingReducer;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST: {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          isLoading: true,
        },
      };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          userData: get('payload')(action),
        },
      };
    }
    case USER_REGISTER_FAIL: {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          error: get('payload')(action),
        },
      };
    }
    case LOGOUT: {
      return {
        ...state,
        userData: {},
      };
    }
    case FETCH_USER_INFO_SUCCESS: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case FETCH_USER_INFO_FAIL: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case SET_USER_INFO_SUCCESS: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    default:
      return state;
  }
};
