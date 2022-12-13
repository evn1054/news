import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostIdPage = (props) => {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setDesc(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [id]);

  return (
    <>
      <div className="container">
        <img className="post__id__img" src={posts.url} alt="" />
        <h2 className="center">{posts.title}</h2>
        <p>{desc.body}</p>
      </div>
    </>
  );
};
export default PostIdPage;
