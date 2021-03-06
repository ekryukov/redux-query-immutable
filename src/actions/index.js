import * as actionTypes from '../constants/action-types';

export const requestStart = ({ body, meta, networkHandler, queryKey, url }) => {
  return {
    type: actionTypes.REQUEST_START,
    url,
    body,
    networkHandler,
    meta,
    queryKey,
  };
};

export const requestSuccess = ({
  body,
  duration,
  entities,
  results,
  meta,
  queryKey,
  responseBody,
  responseHeaders,
  responseText,
  status,
  url,
}) => {
  return {
    type: actionTypes.REQUEST_SUCCESS,
    url,
    body,
    duration,
    status,
    entities,
    results,
    responseBody,
    responseText,
    responseHeaders,
    meta,
    queryKey,
    time: Date.now(),
  };
};

export const requestFailure = ({
  body,
  duration,
  meta,
  queryKey,
  responseBody,
  responseHeaders,
  responseText,
  status,
  url,
}) => {
  return {
    type: actionTypes.REQUEST_FAILURE,
    url,
    body,
    duration,
    status,
    responseBody,
    responseText,
    responseHeaders,
    meta,
    queryKey,
    time: Date.now(),
  };
};

export const mutateStart = ({ body, meta, networkHandler, optimisticEntities, queryKey, url }) => {
  return {
    type: actionTypes.MUTATE_START,
    url,
    body,
    networkHandler,
    optimisticEntities,
    queryKey,
    meta,
  };
};

export const mutateSuccess = ({
  body,
  duration,
  entities,
  results,
  meta,
  queryKey,
  responseBody,
  responseHeaders,
  responseText,
  status,
  url,
}) => {
  return {
    type: actionTypes.MUTATE_SUCCESS,
    url,
    body,
    duration,
    status,
    responseBody,
    responseText,
    responseHeaders,
    entities,
    results,
    queryKey,
    time: Date.now(),
    meta,
  };
};

export const mutateFailure = ({
  body,
  duration,
  meta,
  queryKey,
  responseBody,
  responseHeaders,
  responseText,
  rolledBackEntities,
  status,
  url,
}) => {
  return {
    type: actionTypes.MUTATE_FAILURE,
    url,
    body,
    duration,
    status,
    responseBody,
    responseText,
    responseHeaders,
    rolledBackEntities,
    queryKey,
    time: Date.now(),
    meta,
  };
};

export const requestAsync = ({
  body,
  errorCallback,
  force = true,
  meta = {},
  options,
  queryKey,
  retry,
  successCallback,
  transform,
  transformResult,
  update = {},
  updateResult,
  url,
  unstable_preDispatchCallback,
}) => {
  return {
    type: actionTypes.REQUEST_ASYNC,
    body,
    errorCallback,
    force,
    queryKey,
    meta,
    options,
    retry,
    successCallback,
    transform,
    transformResult,
    update,
    updateResult,
    url,
    unstable_preDispatchCallback,
  };
};

export const mutateAsync = ({
  body,
  meta,
  optimisticUpdate,
  options,
  queryKey,
  rollback,
  transform,
  transformResult,
  update,
  updateResult,
  url,
}) => {
  return {
    type: actionTypes.MUTATE_ASYNC,
    body,
    meta,
    optimisticUpdate,
    options,
    queryKey,
    rollback,
    transform,
    transformResult,
    update,
    updateResult,
    url,
  };
};

export const cancelQuery = queryKey => {
  return {
    type: actionTypes.CANCEL_QUERY,
    queryKey,
  };
};

export const updateEntities = update => {
  return {
    type: actionTypes.UPDATE_ENTITIES,
    update,
  };
};

export const updateResults = update => {
  return {
    type: actionTypes.UPDATE_RESULTS,
    update,
  };
};
