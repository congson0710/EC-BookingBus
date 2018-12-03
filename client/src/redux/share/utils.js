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
