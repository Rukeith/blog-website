import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class EditArticlePage extends Component {
  render() {
    const { articleId } = this.props;
    return (
      <main id="edit-article-page">
        {articleId}
      </main>
    );
  }
}

EditArticlePage.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default EditArticlePage;
