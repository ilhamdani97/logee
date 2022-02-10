import { DATA_FETCHED, LOADING, FAILED, CLEAR_MESSAGE } from './constants';

const initialState = {
  isLoading: {
    fetchUserList:false
  },
  data:{
    fetchUserList:false
  },
  message:{
    fetchUserList:false
  },
};

export default function reducer(state = initialState, action = {}) {
  const { type, data, isLoading, key, message  } = action;

  switch (type) {
    case DATA_FETCHED:
      return {
        ...state,
        isLoading: { ...state.isLoading, [key] : isLoading },
        data:{ ...state.data, [key]: data }
      };
    case LOADING:
      return {
        ...state,
        isLoading: { ...state.isLoading, [key] : isLoading },
      };
    case FAILED:
      return {
        ...state,
        isLoading: { ...state.isLoading, [key] : isLoading },
        message: { ...state.message, [key] : message },
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: { ...state.message, [key]:message },
      };

    default:
      return state;
  }
}
