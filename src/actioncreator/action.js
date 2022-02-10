import { API as MainApi, TYPES as MainType } from '@pages/Main/API';

const apis = {
  MainApi,

};

export const typeAction = {
  MainApi: MainType,

};

export function fetchData(key, bodyParam, queryParam, serviceApi) {
  return async (dispatch) => {
    dispatch(loadingAction(typeAction[serviceApi], true, key));
    dispatch(failedAction(typeAction[serviceApi], '', key));
    try {
      const response = await apis[serviceApi][key](bodyParam, queryParam);
      dispatch(dataFetchedAction(typeAction[serviceApi], response, key));
    } catch (err) {
      dispatch(
        failedAction(
          typeAction[serviceApi],
          `${err.message} (Err Code : ${err.code})`,
          key
        )
      );
    }
    dispatch(loadingAction(typeAction[serviceApi], false, key));
  };
}

function dataFetchedAction(type, data, key) {
  return { type: type.DATA_FETCHED, data, key };
}

function loadingAction(type, isLoading, key) {
  return { type: type.LOADING, isLoading, key };
}

export function failedAction(type, message, key) {
  return { type: type.FAILED, message, key };
}
