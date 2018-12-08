import flow from 'lodash/fp/flow';
import get from 'lodash/fp/get';
import isEqual from 'lodash/fp/isEqual';

export const isPost = flow(
  get('requestType'),
  requestType => isEqual('post')(requestType)
);

export const genActionTypes = action => ({
  request: `${action}_REQUEST`,
  success: `${action}_SUCCESS`,
  fail: `${action}_FAIL`
});

export const genRequestConfig = (data, type) => ({
  requestData: data,
  requestType: type
});

export const genReducerPath = action => `EcBooking/${action}`;
