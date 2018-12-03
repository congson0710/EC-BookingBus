import flow from 'lodash/fp/flow';
import snakeCase from 'lodash/fp/snakeCase';
import toUpper from 'lodash/fp/toUpper';
import get from 'lodash/fp/get';
import isEqual from 'lodash/fp/isEqual';

export const formatActionType = flow(
  snakeCase,
  toUpper
);

export const isPost = flow(
  get('requestType'),
  requestType => isEqual('post')(requestType)
);

export const genActionTypes = action => ({
  request: `${formatActionType(action)}_REQUEST`,
  success: `${formatActionType(action)}_SUCCESS`,
  fail: `${formatActionType(action)}_FAIL`
});

export const genRequestConfig = (data, type) => ({
  requestData: data,
  requestType: type
});
