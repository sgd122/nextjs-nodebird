import { AuthActionType, LOGIN, LOGOUT } from './types';

export interface User {
  isLoggedIn: boolean;
  user?: object | null;
  signUpData: object | null;
  loginData: object | null;
}

export const initialState: User = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

export interface LogInAction {
  type: typeof LOGIN;
  data: { id: string; password: string };
}

export interface LogOutAction {
  type: typeof LOGOUT;
}

export const loginAction = (data: { id: string; password: string }) => {
  return { type: 'LOG_IN', data };
};

export const logoutAction = () => {
  return { type: 'LOG_OUT' };
};

const reducer = (state = initialState, action: AuthActionType): User => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };

    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
