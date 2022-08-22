import { Col, Input, Menu, Row } from 'antd';

import Link from 'next/link';
import LoginForm from 'components/LoginForm';
import React from 'react';
import UserProfile from 'components/UserProfile';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://blog.dnd.ac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made By GiDong
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
