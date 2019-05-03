import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from '../PostHeader';

const Post = ({ data }) => (
  <div className="post">
    <PostHeader avatar={data.avatar} name={data.name} time={data.time} />
    <div className="line-separator" />
    <p>{data.description}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
