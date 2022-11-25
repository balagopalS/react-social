import React from "react";
import { Post as iPost } from "./Main";

interface Props {
  post: iPost;
}

function post(props: Props) {
  const { post } = props;
  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="description">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.userName}</p>
      </div>
    </div>
  );
}

export default post;
