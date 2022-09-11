import { IPost } from 'api';
import { PostActionType } from './types';

export const initialState: IPost = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'sgd',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://camo.githubusercontent.com/bb8dae7b26621c89f6490930e9b493ddb1e090a4adaa219056b5d4db3f589945/68747470733a2f2f7261772e6769746875622e636f6d2f7367643132322f7367643132322f6d61737465722f696d672f6c6f676f2f707267726d732e706e67',
        },
        {
          src: 'https://sgd122.github.io/images/banner.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'sgd',
          },
          content: '댓글',
        },
        {
          User: {
            nickname: 'test',
          },
          content: '댓글2',
        },
      ],
    },
  ],
  ImagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미',
  User: {
    id: 1,
    nickname: 'sgd',
  },
  Image: [],
  Comments: [],
};

const reducer = (state = initialState, action: PostActionType): IPost => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
