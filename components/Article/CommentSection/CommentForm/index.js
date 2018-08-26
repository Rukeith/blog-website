import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const CommentForm = ({
  name,
  comment,
  comments,
  articleId,
  createComment,
  typingComment,
  typingCommentName,
}) => (
  <div className="article-comments-form">
    <form onSubmit={
        event => createComment(event, articleId, { username: name, context: comment, comments })
      }
    >
      <input type="text" value={name} placeholder="Your name" onChange={event => typingCommentName(event.target.value)} />
      <input type="text" value={comment} placeholder="Your thoughts" onChange={event => typingComment(event.target.value)} />
      <button type="submit">
        <FontAwesomeIcon icon="paper-plane" />
      </button>
    </form>
  </div>
);

CommentForm.defaultProps = {
  name: '',
  comment: '',
};

CommentForm.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
  comments: PropTypes.array.isRequired,
  articleId: PropTypes.string.isRequired,
  createComment: PropTypes.func.isRequired,
  typingComment: PropTypes.func.isRequired,
  typingCommentName: PropTypes.func.isRequired,
};

export default CommentForm;
