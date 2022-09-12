import { IUser } from 'api';
import { AuthActionType, LOGIN, LOGOUT } from './types';

export interface User {
  isLoggedIn: boolean;
  me?: IUser | null;
  signUpData: object | null;
  loginData: object | null;
}

export const initialState: User = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export interface LogInAction {
  type: typeof LOGIN;
  data: { id: number; password: string };
}

export interface LogOutAction {
  type: typeof LOGOUT;
}

export const loginAction = (data: { id: number; password: string }) => {
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
        me: action.data,
      };

    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
