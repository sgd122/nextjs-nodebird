import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { IMainState, MainActionType } from './types';

import user, { initialState as userInitialState } from './user';
import post, { initialState as postInitialState } from './post';

const initialState: IMainState = {
  user: userInitialState,
  post: postInitialState,
};

const rootReducer = combineReducers({
  index: (
    state: IMainState = initialState,
    action: MainActionType
  ): IMainState => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
