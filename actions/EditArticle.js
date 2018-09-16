import marked from 'marked';
import hljs from 'highlight.js';
import Router from 'next/router';
import hightlightConfig from '../config/hightlight.json';
import axios from '../lib/axios';

hljs.configure(hightlightConfig);
marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const TYPING_TITLE = 'TYPING_TITLE';
export const TYPING_URL = 'TYPING_URL';
export const TYPING_CATEGORY = 'TYPING_CATEGORY';

export const saveArticle = (event, {
  typingUrl: url,
  typingTitle: title,
  currentContent: content,
  typingCategory: category,
}) => {
  event.preventDefault();

  return async (dispatch) => {
    const begins = content.slice(0, 100);
    const formatContent = marked(content);
    const params = {
      url,
      title,
      begins,
      content: formatContent,
      category: category.split(','),
    };

    await axios.post('/articles', params, {
      headers: {
        'Rukeith-Token': localStorage.getItem('blog-admin-token'),
      },
    });

    dispatch({
      type: SAVE_ARTICLE,
    });

    Router.push('/admin');
  };
};

export const typingNewTitle = typingTitle => ({
  type: TYPING_TITLE,
  typingTitle,
});

export const typingNewUrl = typingUrl => ({
  type: TYPING_URL,
  typingUrl,
});

export const typingNewCategory = typingCategory => ({
  type: TYPING_CATEGORY,
  typingCategory,
});
