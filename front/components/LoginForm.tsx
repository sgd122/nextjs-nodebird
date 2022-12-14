import { Button, Form, Input } from 'antd';
import React, { useCallback } from 'react';

import Link from 'next/link';
import { loginAction } from 'reducers/user';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeId = useCallback(
    (e: { target: { value: React.SetStateAction<string> } }) => {
      setId(e.target.value);
    },
    []
  );

  const onChangePassword = useCallback(
    (e: { target: { value: React.SetStateAction<string> } }) => {
      setPassword(e.target.value);
    },
    []
  );

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
