import { 
  REGISTER_USER,
  AUTH_USER,
  USER_LOGOUT,
  AUTH_USER_SUCCEEDED,
  AUTH_USER_FAILED
} from "../../common/ActionTypes";

export function authUser(payload: any) {
  return { type: AUTH_USER, payload };
}

export function logOutUser(payload: any) {
  return { type: USER_LOGOUT, payload };
}

export function registerUser(payload: any) {
  return { type: REGISTER_USER, payload };
}
