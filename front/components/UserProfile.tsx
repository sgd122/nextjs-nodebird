import { Avatar, Button, Card } from 'antd';
import React, { useCallback } from 'react';

import { logoutAction } from 'reducers/user';
import { useDispatch } from 'react-redux';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta title="GiDong" avatar={<Avatar>GD</Avatar>} />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
