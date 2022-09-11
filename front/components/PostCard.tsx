import { IMainPost } from 'api';
import React from 'react';

interface Props {
  post: IMainPost;
}
const PostCard: React.FC<Props> = ({ post }) => {
  return <div>PostCard</div>;
};

export default PostCard;
