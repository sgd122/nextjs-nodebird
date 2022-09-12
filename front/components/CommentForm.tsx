import { Button, Form, Input } from 'antd';
import { IMainPost } from 'api';
import useInput from 'hooks/useInput';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

interface Props {
  post: IMainPost;
}

const CommentForm: React.FC<Props> = ({ post }) => {
  const id = useSelector((state: RootState) => state.user.me?.id);
  const [commentText, setCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log(post.id, commentText);
  }, [commentText, post.id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={setCommentText}
          rows={4}
        />
        <Button
          style={{ position: 'absolute', right: 0, bottom: -40 }}
          type="primary"
          htmlType="submit"
        >
          전송
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
