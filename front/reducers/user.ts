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

export const loginRequestAction = (data: { id: number; password: string }) => {
  return { type: 'LOG_IN_REQUEST', data };
};
export const loginSuccessAction = (data: { id: number; password: string }) => {
  return { type: 'LOG_IN_SUCCESS', data };
};
export const loginFailureAction = (data: { id: number; password: string }) => {
  return { type: 'LOG_IN_FAILURE', data };
};
export const logoutRequestAction = () => {
  return { type: 'LOG_OUT_REQUEST' };
};
export const logoutSuccessAction = () => {
  return { type: 'LOG_OUT_SUCCESS' };
};
export const logoutFailureAction = () => {
  return { type: 'LOG_OUT_FAILURE' };
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
