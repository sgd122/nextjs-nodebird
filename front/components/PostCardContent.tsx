import Link from 'next/link';
import React from 'react';

interface Props {
  postData: string;
}
const PostCardContent: React.FC<Props> = ({ postData }) => {
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map(v => {
        if (v.match(/(#[^\s#]+)/)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={v}>
              <a>{v}</a>
            </Link>
          );
        }

        return v;
      })}
    </div>
  );
};

export default PostCardContent;
