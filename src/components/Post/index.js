import React from "react";
import HeaderPost from "../PostHeader";

const Post = ({ data }) => (
  <div className="post">
    <HeaderPost avatar={data.avatar} name={data.name} time={data.time} />
    <div className="line-separator" />
    <p>{data.description}</p>
  </div>
);

export default Post;
