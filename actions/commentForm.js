import axios from '../lib/axios';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const TYPING_COMMENT = 'TYPING_COMMENT';
export const TYPING_COMMENT_NAME = 'TYPING_COMMENT_NAME';

export const createComment = (event, articleId, {
  username,
  email,
  context,
}, comments) => {
  event.preventDefault();

  return async (dispatch) => {
    await axios.post(`articles/${articleId}/comments`, { username, email, context });
    comments.push({ username, comment: context });

    dispatch({
      type: CREATE_COMMENT,
      name: '',
      comment: '',
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
