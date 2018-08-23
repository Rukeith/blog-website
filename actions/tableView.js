import axios from '../lib/axios';

export const GET_TAGS = 'GET_TAGS';

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
