import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/profile">프로필</Link>
        <Link href="/signup">회원가입</Link>
      </div>
      {children}
    </div>
  );
};

export default AppLayout;
