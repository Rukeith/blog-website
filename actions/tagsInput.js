import axios from '../lib/axios';
import { GET_TAGS } from './tableView';

export const CREATE_TAGS = 'CREATE_TAGS';
export const SET_NEW_TAG = 'SET_NEW_TAG';
export const SKIP_TYPING = 'SKIP_TYPING';
export const TYPING_NEW_TAG = 'TYPING_NEW_TAG';
export const REMOVE_NEW_TAG = 'REMOVE_NEW_TAG';

export const createTags = (event, names) => {
  event.preventDefault();
  if (event.detail !== 1) return { type: SKIP_TYPING };

  return async (dispatch) => {
    await axios.post('/tags', { names }, {
      headers: {
        'Rukeith-Token': 'fake-token',
      },
    });

    dispatch({
      type: CREATE_TAGS,
      tagNames: [],
      typingName: '',
    });

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
};

export const setNewTag = (keyCode, typingName, tagNames) => {
  if (keyCode === 13) {
    return {
      type: SET_NEW_TAG,
      typingName: '',
      tagNames: [...tagNames, typingName],
    };
  }
  if (keyCode === 8 && tagNames.length && !typingName) {
    return {
      type: SET_NEW_TAG,
      typingName,
      tagNames: tagNames.slice(0, tagNames.length - 1),
    };
  }

  return { type: SKIP_TYPING };
};

export const typingNewTag = typingName => ({
  type: TYPING_NEW_TAG,
  typingName,
});

export const removeNewTag = (name, tagNames) => ({
  type: REMOVE_NEW_TAG,
  tagNames: tagNames.filter(item => item !== name),
});
