export const googleImageActionTypes = {
  googleImageSearchLoading: 'GOOGLE_IMAGE_SEARCH_LOADING',
  googleImageSearchSuccess: 'GOOGLE_IMAGE_SEARCH_SUCCESS',
  googleImageSearchFailed: 'GOOGLE_IMAGE_SEARCH_FAILED',
};

const initialState = {
  googleImageSearch: {
    isLoading: false,
    data: {},
    error: null,
    success: false,
  },
};

export const googleImageSearchReducer = (
  state = initialState.googleImageSearch,
  action,
) => {
  switch (action.type) {
    case googleImageActionTypes.googleImageSearchLoading:
      return {...state, isLoading: true, error: false};
    case googleImageActionTypes.googleImageSearchSuccess: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: false,
      };
    }
    case googleImageActionTypes.googleImageSearchFailed:
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
};

export const googleImageSearchActions = {
  googleImageSearchLoading(bool) {
    return {
      type: googleImageActionTypes.googleImageSearchLoading,
      bool,
    };
  },
  googleImageSearchSuccess(data) {
    return {
      type: googleImageActionTypes.googleImageSearchSuccess,
      payload: data,
    };
  },
  googleImageSearchFailed(error) {
    return {
      type: googleImageActionTypes.googleImageSearchFailed,
      error,
    };
  },
};

export const googleImageSearchEffects = {
  getImages(querySearch) {
    return async (dispatch) => {
      dispatch(googleImageSearchActions.googleImageSearchLoading(true));
      try {
        const resp = await global.client.searchImages({
          querySearch,
        });
        if (resp.status === 200) {
          dispatch(
            googleImageSearchActions.googleImageSearchSuccess(resp.data),
          );
          return {response: resp, error: null};
        }
      } catch (e) {
        dispatch(googleImageSearchActions.googleImageSearchFailed(e));
        return {response: null, error: e};
      }
    };
  },
};
