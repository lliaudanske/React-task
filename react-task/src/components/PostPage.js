import React, { useState, useEffect } from 'react';
import './PostPage.css';

const dummyPosts = [
  {
    id: 1,
    title: 'Sunny Day',
    imageUrl:
      'https://images.unsplash.com/photo-1569421053595-ff9605a32977?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Best Coffee Shops',
    username: 'coffeelife',
    imageUrl:
      'https://images.unsplash.com/photo-1569421053595-ff9605a32977?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Mountains Majesty',
    username: 'hiker22',
    imageUrl:
      'https://images.unsplash.com/photo-1569421053595-ff9605a32977?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(dummyPosts);
    }, 1500);
  }, []);

  return (
    <div className='post-page'>
      <div className='post-list'>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className='post'>
              <img
                src={post.imageUrl}
                alt={post.title}
                className='post-image'
              />
              <h3 className='post-title'>{post.title}</h3>
              <p className='post-username'>@{post.username}</p>
            </div>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
};

export default PostPage;
