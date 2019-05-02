import React from "react";
import HeaderPost from "../PostHeader";

const Post = ({ post }) => (
  <div className="post">
    <HeaderPost />
    <div className="post">{post.description}</div>
  </div>
);

export default Post;
