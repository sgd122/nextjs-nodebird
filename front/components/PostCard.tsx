import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartTwoTone,
} from '@ant-design/icons';
import { Avatar, Button, Card, Comment, List, Popover } from 'antd';
import { IMainPost } from 'api';
import React, { Fragment, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';

interface Props {
  post: IMainPost;
}
const PostCard: React.FC<Props> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state: RootState) => state.user.me?.id);

  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images?.[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone twoToneColor="#eb2f96" onClick={onToggleLike} />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button danger>삭제</Button>
                  </>
                ) : (
                  <Button> 신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname?.[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments?.length ?? 0}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname?.[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
};

export default PostCard;
