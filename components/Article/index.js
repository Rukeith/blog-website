import React from 'react';
import PropTypes from 'prop-types';
import ShareBar from './ShareBar';
import Breadcrumb from './Breadcrumb';
import CommentSection from './CommentSection';
import './style.scss';

const Article = ({ breadcrumb = [], title, content }) => (
  <div id="article">
    <Breadcrumb breadcrumb={breadcrumb} />
    <article id="content">
      <h1>{title}</h1>
      {content}
    </article>
    <ShareBar />
    <CommentSection />
  </div>
);

Article.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
