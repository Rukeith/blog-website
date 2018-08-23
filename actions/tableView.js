import axios from '../lib/axios';

export const GET_TAGS = 'GET_TAGS';

export const getTags = () => {
  return async () => {
    const { data } = await axios.get('/tags');
    return {
      type: GET_TAGS,
      tags: data.data,
    };
  };
};
