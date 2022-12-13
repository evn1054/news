import React from "react";
import MyButton from "../button/MyButton";
import { useNavigate, Link } from "react-router-dom";
import classes from "./PostItem.module.css";

const PostItem = (props) => {
  const navigate = useNavigate();
  // console.log("navigate", navigate);
  return (
    <>
      <div className={classes.post}>
        <div className={classes.post__constent}>
          <img
            src={props.post.thumbnailUrl}
            alt={props.post.title}
            className={classes.post__img}
          />
          <div className={classes.post__container}>
            <div className={classes.post__title}>{props.post.title}</div>
            <div className={classes.post__desc}>{props.post.title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
