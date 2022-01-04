import { 
  REGISTER_USER,
  AUTH_USER,
  USER_LOGOUT,
  TOGGLE_SOCIAL_ICONS
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

export function toggleSocialIcons(payload: any) {
  return { type: TOGGLE_SOCIAL_ICONS, payload }
}
