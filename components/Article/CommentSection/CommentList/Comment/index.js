import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Comment = ({ username, comment, createdAt }) => (
  <div className="article-comment">
    <div className="article-comment-headline">
      <strong className="article-comment-author">{username}</strong>
      <p className="article-comment-createdAt">{createdAt}</p>
    </div>
    <hr />
    <p className="article-comment-context">{comment}</p>
  </div>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Comment;
