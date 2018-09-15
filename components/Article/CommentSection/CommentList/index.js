import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './style.scss';

class CommentList extends Component {
  async componentDidMount() {
    const { articleId, getComments } = this.props;
    await getComments(articleId);
  }

  render() {
    const { comments } = this.props;

    return (
      <div className="article-comments-form">
        {
          comments.map(({ username, comment, createdAt }) => (
            <Comment
              key={new Date(createdAt)}
              username={username}
              comment={comment}
              createdAt={createdAt}
            />
          ))
        }
      </div>
    );
  }
}

CommentList.defaultProps = {
  comments: [],
};

CommentList.propTypes = {
  comments: PropTypes.array,
  articleId: PropTypes.string.isRequired,
};

export default CommentList;
