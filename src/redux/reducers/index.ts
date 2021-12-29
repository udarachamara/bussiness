import {
  AUTH_USER,
  AUTH_USER_SUCCEEDED,
  USER_LOGOUT,
  AUTH_USER_FAILED,
  USER_LOGOUT_FAILED,
  USER_LOGOUT_SUCCEEDED
} from "../../common/ActionTypes";

const initialState = {
  user: [] as any,
  tags: [] as any,
  posts: [] as any,
  error: [] as any,
  loading: false,
};

function rootReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case AUTH_USER:
      return Object.assign({}, state, {
        user: [],
        loading: true,
        error: []
      });
    case AUTH_USER_SUCCEEDED:
      return Object.assign({}, state, {
        user: payload.data,
        loading: false,
        error: []
      });
    case AUTH_USER_FAILED:
      return Object.assign({}, state, {
        user: [],
        loading: false,
        error: payload
      });
    case USER_LOGOUT:
      return Object.assign({}, state, {
        user: [],
        loading: true,
        error: []
      });
    case USER_LOGOUT_SUCCEEDED:
      return Object.assign({}, state, {
        user: [],
        loading: false,
        error: []
      });
    case USER_LOGOUT_FAILED:
      return Object.assign({}, state, {
        user: [],
        loading: false,
        error: payload
      });
    default:
      return state
  }
}

export default rootReducer;