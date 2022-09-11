import { HYDRATE } from 'next-redux-wrapper';
import { Post } from './post';
import { LogInAction, LogOutAction, User } from './user';

export const LOGIN = 'LOG_IN';
export const LOGOUT = 'LOG_OUT';

export interface IMainState {
  user: User;
  post: Post;
}

export type AuthActionType = LogOutAction | LogInAction;
export type PostActionType = LogOutAction | LogInAction;

export type MainActionType =
  | AuthActionType
  | { type: typeof HYDRATE; payload: IMainState };
