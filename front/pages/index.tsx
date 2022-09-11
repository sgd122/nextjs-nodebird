import AppLayout from 'components/AppLayout';
import PostCard from 'components/PostCard';
import PostForm from 'components/PostForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

const Home = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const { mainPosts } = useSelector((state: RootState) => state.post);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
