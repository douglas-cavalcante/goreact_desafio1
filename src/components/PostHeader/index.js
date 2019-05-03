import React from 'react';

const HeaderPost = ({ avatar, name, time }) => (
  <div className="header-post">
    <img className="avatar" src={avatar} açt="avatar" />
    <div className="info-post">
      <strong>{name}</strong>
      <span>{time}</span>
    </div>
  </div>
);

export default HeaderPost;
