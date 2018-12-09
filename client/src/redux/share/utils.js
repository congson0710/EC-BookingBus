import flow from 'lodash/fp/flow';
import get from 'lodash/fp/get';
import isEqual from 'lodash/fp/isEqual';
import includes from 'lodash/fp/includes';

export const isPost = flow(
  get('requestType'),
  requestType => isEqual('post')(requestType)
);

const actionTypeCheck = name =>
  includes('FETCH')(name)
    ? 'IS_FETCH'
    : includes('SET')(name)
    ? 'IS_SET'
    : null;

export const genActionTypes = name => {
  const typeCheck = actionTypeCheck(name);
  switch (typeCheck) {
    case 'IS_FETCH': {
      return {
        request: `${name}_REQUEST`,
        success: `${name}_SUCCESS`,
        fail: `${name}_FAIL`
      };
    }
    case 'IS_SET': {
      return {
        set: name
      };
    }
    default: {
      return {
        request: `FETCH_${name}_REQUEST`,
        success: `FETCH_${name}_SUCCESS`,
        fail: `FETCH_${name}_FAIL`,
        set: `SET_${name}`
      };
    }
  }
};

export const genRequestConfig = (data, type) => ({
  requestData: data,
  requestType: type
});

export const genReducerPath = action => `EcBooking/${action}`;
