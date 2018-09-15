import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import PropTypes from 'prop-types';
import './style.scss';
// import 'highlight.js/styles/arta.css';

marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

class EditArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originContent: '',
      previewContent: '',
    };
  }
  render({ articleId }) {
    return (
      <main id="edit-article-page">
        {articleId}
        <div className="common-wrapper">
          {previewContent}
        </div>
      </main>
    );
  }
}


EditArticlePage.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default EditArticlePage;
