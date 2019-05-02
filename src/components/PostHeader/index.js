import React from "react";
const HeaderPost = (props) => (
  <div className="header-post">
    <img className="avatar" src={props.avatar} />
    <div className="info-post">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
);

export default HeaderPost;
