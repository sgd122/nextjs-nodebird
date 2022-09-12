import { PostImage } from 'api';
import React from 'react';

interface Props {
  images: PostImage[];
}
const PostImages: React.FC<Props> = ({ images }) => {
  return <div>PostImages</div>;
};

export default PostImages;
