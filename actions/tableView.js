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

  return dispatch({
    tags,
    type: GET_TAGS,
  });
};

export const renameTag = (name, index, data) => async (dispatch) => {
  const tags = [...data];
  const tag = tags[index];

  await axios.patch(`/tags/${tag.id}`, { name }, {
    headers: {
      'Rukeith-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6Ijo6ZmZmZjoxMC4xNTguMTc2LjkzIiwiaWF0IjoxNTM1MDEwMTM3LCJleHAiOjE1MzUwMTE5MzcsImlzcyI6InJ1a2VpdGgifQ.P3HSsaj_PPsHezQDnooAisa0KFXWr7C40VQ26J61MSo',
    },
  });

  tags[index].name = name;

  return dispatch({
    tags,
    type: RENAME_TAG,
  });
};
