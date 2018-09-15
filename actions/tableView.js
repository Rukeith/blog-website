import { DateTime } from 'luxon';
import axios from '../lib/axios';

const timeUnit = DateTime.DATETIME_SHORT_WITH_SECONDS;

export const GET_TAGS = 'GET_TAGS';
export const RENAME_TAG = 'RENAME_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const GET_ARTICLES = 'GET_ARTICLES';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export const getTags = () => async (dispatch) => {
  const {
    data: {
      data,
    },
  } = await axios.get('/tags');

  const tags = data.map(({
    id,
    name,
    articles: { amount },
  }) => ({
    id,
    name,
    amount,
  }));

  dispatch({
    type: GET_TAGS,
    data: tags,
  });
};

export const renameTag = (name, index, data) => async (dispatch) => {
  const tags = [...data];
  const tag = tags[index];
  if (tag.name === name) {
    dispatch({
      type: 'SKIP',
    });
  }

  await axios.patch(`/tags/${tag.id}`, { name }, {
    headers: {
      'Rukeith-Token': localStorage.getItem('blog-admin-token'),
    },
  });

  tags[index].name = name;
  dispatch({
    type: RENAME_TAG,
    data: tags,
  });
};

export const deleteTag = tagId => async (dispatch) => {
  await axios.delete(`/tags/${tagId}`, {
    headers: {
      'Rukeith-Token': localStorage.getItem('blog-admin-token'),
    },
  });

  const {
    data: {
      data,
    },
  } = await axios.get('/tags');

  const tags = data.map(({
    id,
    name,
    articles: { amount },
  }) => ({
    id,
    name,
    amount,
  }));

  dispatch({
    type: DELETE_TAG,
    data: tags,
  });
};

export const getArticles = () => async (dispatch) => {
  const {
    data: {
      data,
    },
  } = await axios.get('/articles', {
    params: {
      fields: 'title,createdAt,updatedAt,publishedAt',
    },
  });

  const articles = data.map(item => ({
    id: item._id,
    title: item.title,
    createdAt: DateTime.fromISO(item.createdAt).toLocaleString(timeUnit),
    updatedAt: DateTime.fromISO(item.updatedAt).toLocaleString(timeUnit),
    publishedAt: item.publishedAt
      ? DateTime.fromISO(item.publishedAt).toLocaleString(timeUnit) : null,
  }));

  dispatch({
    type: GET_ARTICLES,
    data: articles,
  });
};

export const deleteArticle = articleId => async (dispatch) => {
  await axios.delete(`/articles/${articleId}`, {
    headers: {
      'Rukeith-Token': localStorage.getItem('blog-admin-token'),
    },
  });

  const {
    data: {
      data,
    },
  } = await axios.get('/articles', {
    params: {
      fields: 'title,createdAt,updatedAt,publishedAt',
    },
  });

  const articles = data.map(item => ({
    id: item.id,
    title: item.title,
    createdAt: DateTime.fromISO(item.createdAt).toLocaleString(timeUnit),
    updatedAt: DateTime.fromISO(item.updatedAt).toLocaleString(timeUnit),
    publishedAt: item.publishedAt
      ? DateTime.fromISO(item.publishedAt).toLocaleString(timeUnit) : null,
  }));

  dispatch({
    type: DELETE_ARTICLE,
    data: articles,
  });
};
