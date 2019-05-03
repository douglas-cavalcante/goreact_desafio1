import React from 'react';
import PropTypes from 'prop-types';

const HeaderPost = ({ avatar, name, time }) => (
  <div className="header-post">
    <img className="avatar" src={avatar} alt="avatar" />
    <div className="info-post">
      <strong>{name}</strong>
      <span>{time}</span>
    </div>
  </div>
);

HeaderPost.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default HeaderPost;
