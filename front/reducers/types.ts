import { IPost } from 'api';
import { HYDRATE } from 'next-redux-wrapper';

import { LogInAction, LogOutAction, User } from './user';
import { addPost } from './post';

export const LOGIN = 'LOG_IN';
export const LOGOUT = 'LOG_OUT';

export interface IMainState {
  user: User;
  post: IPost;
}

export type AuthActionType = LogOutAction | LogInAction;
export type PostActionType = typeof addPost;

export type MainActionType =
  | AuthActionType
  | { type: typeof HYDRATE; payload: IMainState };
