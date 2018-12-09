import get from 'lodash/fp/get';
import flow from 'lodash/fp/flow';

import axios from '../../axios';
import {
  isPost,
  genActionTypes,
  genRequestConfig,
  genReducerPath
} from './utils';

const thunkBody = async ({
  dispatch,
  actionTypes,
  route,
  requestConfig = {}
}) => {
  dispatch({
    type: get('request')(actionTypes)
  });

  try {
    const response = isPost(requestConfig)
      ? await axios.post(route, get('requestData')(requestConfig))
      : await axios.get(route);

    if (response) {
      dispatch({
        type: get('success')(actionTypes),
        payload: response.data
      });
    }
  } catch (error) {
    dispatch({
      type: get('fail')(actionTypes),
      payload: error
    });
    console.error(error);
  }
};

const genParams = ({ dispatch, action, route, data, type }) => {
  const actionTypes = genActionTypes(action);
  const requestConfig = genRequestConfig(data, type);
  return {
    dispatch,
    actionTypes,
    route,
    requestConfig
  };
};

export const setRawDataActionCreator = action => payload => ({
  type: action,
  payload
});

export const thunkBodyCreator = flow(
  genParams,
  thunkBody
);

export const reducerCreator = (reducerName, reducerPath) => {
  const actionTypes = genActionTypes(reducerName);

  return (state = {}, action) => {
    switch (action.type) {
      case get('request')(actionTypes): {
        return {
          ...state,
          [reducerPath]: {
            ...get(reducerPath)(state),
            isLoading: true
          }
        };
      }
      case get('success')(actionTypes): {
        return {
          ...state,
          [reducerPath]: {
            ...get(reducerPath)(state),
            data: get('payload')(action),
            isLoading: false
          }
        };
      }
      case get('fail')(actionTypes): {
        return {
          ...state,
          [reducerPath]: {
            ...get(reducerPath)(state),
            error: get('payload')(action),
            isLoading: false
          }
        };
      }
      case get('set')(actionTypes): {
        return {
          ...state,
          [reducerPath]: {
            ...get(reducerPath)(state),
            data: get('payload')(action)
          }
        };
      }
      default:
        return state;
    }
  };
};

export const rawDataSelectorCreator = (
  reducerName,
  reducerSectionName
) => state =>
  flow(
    get(reducerName),
    get(reducerSectionName),
    get(genReducerPath(reducerSectionName)),
    get('data')
  )(state);
