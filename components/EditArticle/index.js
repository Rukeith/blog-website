import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import PropTypes from 'prop-types';
import hightlightConfig from '../../config/hightlight.json';
import TagsInput from '../../containers/TagsInput';
import './style.scss';

hljs.configure(hightlightConfig);
marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

class CreateArticlagePage extends Component {
  constructor(props) {
    super(props);
    const {
      typingNewTitle,
      typingNewUrl,
      typingNewCategory,
      url = '',
      title = '',
      category = '',
      content = '',
    } = props;

    let previewContent = '';
    if (content) {
      previewContent = marked(content);
    }

    this.state = {
      tempContent: '',
      currentContent: content,
      previewContent,
    };

    typingNewTitle(title);
    typingNewUrl(url);
    typingNewCategory(category);
    this.reset = this.reset.bind(this);
    this.editContent = this.editContent.bind(this);
  }

  editContent(event) {
    const { innerText } = event.target;
    const previewContent = marked(innerText);
    this.setState({
      tempContent: innerText,
      previewContent,
    });
  }

  async reset(event) {
    event.preventDefault();
    const {
      typingNewTitle,
      typingNewUrl,
      typingNewCategory,
      url = '',
      title = '',
      category = '',
      content = '',
    } = this.props;
    const { tempContent } = this.state;

    let previewContent = '';
    if (content) {
      previewContent = marked(content);
    }

    await this.setState({
      currentContent: tempContent,
    });
    await Promise.all([
      this.setState({
        currentContent: content,
        previewContent,
      }),
      typingNewTitle(title),
      typingNewUrl(url),
      typingNewCategory(category),
    ]);
  }

  render() {
    const {
      saveArticle,
      typingNewTitle,
      typingNewUrl,
      typingNewCategory,
      ...typingValues
    } = this.props;
    const {
      typingTitle,
      typingUrl,
      typingCategory,
    } = typingValues;
    const { tempContent, currentContent, previewContent } = this.state;

    return (
      <main id="create-article">
        <div className="edit-section">
          <div className="edit-section-submit">
            <button className="btn create-btn" type="submit" onClick={event => saveArticle(event, { currentContent: tempContent, ...typingValues })}>Save</button>
            <button className="btn reset-btn" type="button" onClick={this.reset}>Reset</button>
          </div>
          <div className="edit-section-options">
            <div className="input-group">
              <input
                type="text"
                value={typingTitle}
                className="form-control"
                placeholder="Typing article title"
                onChange={event => typingNewTitle(event.target.value)}
              />
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="">Url & Category</span>
              </div>
              <input
                type="text"
                value={typingUrl}
                className="form-control"
                placeholder="Typing unique url"
                onChange={event => typingNewUrl(event.target.value)}
              />
              <input
                type="text"
                value={typingCategory}
                className="form-control"
                placeholder="Category format：program,nodejs"
                onChange={event => typingNewCategory(event.target.value)}
              />
            </div>
            <TagsInput />
          </div>

          <div className="edit-section-content-section">
            <div className="edit-section-content-section-block content-edit">
              <div
                onInput={this.editContent}
                className="content-wrapper"
                contentEditable="plaintext-only"
                dangerouslySetInnerHTML={{ __html: currentContent }}
              />
            </div>
            <div className="edit-section-content-section-block content-preview">
              <div
                className="content-wrapper"
                contentEditable="false"
                dangerouslySetInnerHTML={{ __html: previewContent }}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

CreateArticlagePage.defaultProps = {
  url: '',
  title: '',
  content: '',
  category: '',
  typingTitle: '',
  typingUrl: '',
  typingCategory: '',
};

CreateArticlagePage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  category: PropTypes.string,
  typingTitle: PropTypes.string,
  typingUrl: PropTypes.string,
  typingCategory: PropTypes.string,
  saveArticle: PropTypes.func.isRequired,
  typingNewTitle: PropTypes.func.isRequired,
  typingNewUrl: PropTypes.func.isRequired,
  typingNewCategory: PropTypes.func.isRequired,
};

export default CreateArticlagePage;
