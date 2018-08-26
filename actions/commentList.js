import { DateTime } from 'luxon';
import axios from '../lib/axios';

const timeUnit = DateTime.DATETIME_SHORT_WITH_SECONDS;

export const GET_COMMENTS = 'GET_COMMENTS';

export const getComments = articleId => async (dispatch) => {
  const {
    data: {
      data,
    },
  } = await axios.get(`articles/${articleId}/comments`);
  const comments = data.map(({ username, context: comment, createdAt }) => ({
    username,
    comment,
    createdAt: DateTime.fromISO(createdAt).toLocaleString(timeUnit),
  }));

  dispatch({
    type: GET_COMMENTS,
    comments,
  });
};
