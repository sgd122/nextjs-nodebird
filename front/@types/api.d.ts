declare module 'api' {
  type Image = {
    src: string;
  };

  export interface IUser {
    id?: number;
    nickname: string;
  }

  export interface IPost {
    mainPosts: IMainPost[];
    ImagePaths: any[];
    postAdded: boolean;
  }

  export interface IMainPost {
    id: number;
    User: IUser;
    content: string;
    Images?: Image[];
    Comments?: {
      User: IUser;
      content: string;
    }[];
  }
}
