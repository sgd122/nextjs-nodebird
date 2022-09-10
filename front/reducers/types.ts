import { HYDRATE } from 'next-redux-wrapper';

export const LOGIN = 'LOG_IN';
export const LOGOUT = 'LOG_OUT';

export interface IMainState {
  user: User;
  post: Post;
}

export interface IAuthState {
  loggedInUser: User;
}

export interface User {
  isLoggedIn: boolean;
  user?: object | null;
  signUpData: object | null;
  loginData: object | null;
}

export interface Post {
  mainPosts: object[];
}

interface LogInAction {
  type: typeof LOGIN;
  data: { id: string; password: string };
}

interface LogOutAction {
  type: typeof LOGOUT;
}

export type AuthActionType = LogOutAction | LogInAction;

export type MainActionType =
  | AuthActionType
  | { type: typeof HYDRATE; payload: IMainState };
