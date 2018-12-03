import get from 'lodash/fp/get';
import flow from 'lodash/fp/flow';

import axios from '../../axios';
import { formatActionType, isPost } from './utils';

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

const genActionTypes = action => ({
  request: `${formatActionType(action)}_REQUEST`,
  success: `${formatActionType(action)}_SUCCESS`,
  fail: `${formatActionType(action)}_FAIL`
});

const genRequestConfig = (data, type) => ({
  requestData: data,
  requestType: type
});

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

export const thunkBodyCreator = flow(
  genParams,
  thunkBody
);
