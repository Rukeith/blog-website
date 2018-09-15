import { DateTime } from 'luxon';
import axios from '../lib/axios';
import { GET_COMMENTS } from './commentList';

const timeUnit = DateTime.DATETIME_SHORT_WITH_SECONDS;

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const TYPING_COMMENT = 'TYPING_COMMENT';
export const TYPING_COMMENT_NAME = 'TYPING_COMMENT_NAME';

export const createComment = (event, articleId, {
  username,
  email,
  context,
}) => {
  event.preventDefault();

  return async (dispatch) => {
    await axios.post(`articles/${articleId}/comments`, { username, email, context });

    dispatch({
      type: CREATE_COMMENT,
      name: '',
      comment: '',
    });

    const {
      data: {
        data,
      },
    } = await axios.get(`articles/${articleId}/comments`);
    const comments = data.map(({ username: name, context: comment, createdAt }) => ({
      username: name,
      comment,
      createdAt: DateTime.fromISO(createdAt).toLocaleString(timeUnit),
    }));

    dispatch({
      type: GET_COMMENTS,
      comments,
    });
  };
};

export const typingComment = comment => ({
  type: TYPING_COMMENT,
  comment,
});

export const typingCommentName = name => ({
  type: TYPING_COMMENT_NAME,
  name,
});
