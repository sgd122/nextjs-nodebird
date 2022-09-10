import { HYDRATE } from 'next-redux-wrapper';
import { IMainState, MainActionType } from './types';

const initialState: IMainState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

export const loginAction = (data: { id: string; password: string }) => {
  return { type: 'LOG_IN', data };
};

export const logoutAction = () => {
  return { type: 'LOG_OUT' };
};

const rootReducer = (
  state = initialState,
  action: MainActionType
): IMainState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };

    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
