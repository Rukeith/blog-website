import axios from '../lib/axios';

export const GET_TAGS = 'GET_TAGS';
export const RENAME_TAG = 'RENAME_TAG';

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
