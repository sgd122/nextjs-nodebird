import AppLayout from 'components/AppLayout';
import FollowList from 'components/FollowList';
import Head from 'next/head';
import NicknameEditForm from 'components/NicknameEditForm';
import React from 'react';

const Profile = () => {
  const followerList = [
    { nickname: '성기동' },
    { nickname: 'lia' },
    { nickname: '워터' },
  ];
  const followingList = [
    { nickname: '성기동' },
    { nickname: 'lia' },
    { nickname: '워터' },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
