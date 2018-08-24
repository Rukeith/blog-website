import axios from '../lib/axios';

export const GET_TAGS = 'GET_TAGS';
export const RENAME_TAG = 'RENAME_TAG';
export const DELETE_TAG = 'DELETE_TAG';

export const getTags = () => async (dispatch) => {
  const { data } = await axios.get('/tags');
  const tags = data.data.map(item => ({
    id: item.id,
    name: item.name,
    amount: item.articles.amount,
  }));

  dispatch({
    type: GET_TAGS,
    tags,
  });
};

export const renameTag = (name, index, data) => async (dispatch) => {
  const tags = [...data];
  const tag = tags[index];
  if (tag.name === name) {
    return dispatch({
      type: 'SKIP',
    });
  }

  await axios.patch(`/tags/${tag.id}`, { name }, {
    headers: {
      'Rukeith-Token': 'fake-token',
    },
  });

  tags[index].name = name;
  dispatch({
    type: RENAME_TAG,
    tags,
  });
};

export const deleteTag = tagId => async (dispatch) => {
  await axios.delete(`/tags/${tagId}`, {
    headers: {
      'Rukeith-Token': 'fake-token',
    },
  });

  const { data } = await axios.get('/tags');
  const tags = data.data.map(item => ({
    id: item.id,
    name: item.name,
    amount: item.articles.amount,
  }));

  dispatch({
    type: DELETE_TAG,
    tags,
  });
};
