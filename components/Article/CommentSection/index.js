import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../../../containers/CommentForm';
import CommentList from './CommentList';
import './style.scss';

const CommentSection = ({ articleId }) => (
  <div className="article-comments">
    <h2>Commnets</h2>
    <CommentForm articleId={articleId} />
    {/* <CommentList /> */}
  </div>
);

CommentSection.propTypes = {
  articleId: PropTypes.object.isRequired,
};

export default CommentSection;
