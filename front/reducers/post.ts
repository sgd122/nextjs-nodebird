import { PostActionType } from './types';

export interface Post {
  mainPosts: object[];
}

export const initialState: Post = {
  mainPosts: [],
};
const reducer = (state = initialState, action: PostActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
