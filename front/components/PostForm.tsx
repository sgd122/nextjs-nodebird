import { Button, Form, Input } from 'antd';
import useInput from 'hooks/useInput';
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { addPost } from 'reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const { ImagePaths } = useSelector((state: RootState) => state.post);
  const [text, onChangeText, setText] = useInput('');
  const imageInput = useRef<any>();

  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText('');
  }, [dispatch, setText]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      {' '}
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {ImagePaths.map(v => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
