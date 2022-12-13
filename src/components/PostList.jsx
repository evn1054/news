import React from "react";
import PostItem from "./UI/PostItem.jsx/PostsItem";
import { Link } from "react-router-dom";

const PostList = ({ posts, mainTitle, remove }) => {
  if (!posts.length) {
    return <h1 className="center">Список постов пуст.</h1>;
  }

  return (
    <>
      <h1 className="center">{mainTitle}</h1>
      <div className="postList">
        {posts.map((post, index) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <div key={post.id} timeout={500} classNames="post">
              <PostItem remove={remove} number={index + 1} post={post} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostList;
