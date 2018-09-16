import Router from 'next/router';
import axios from '../lib/axios';

export const LOGIN = 'LOGIN';
export const TYPING_USERNAME = 'TYPING_USERNAME';
export const TYPING_PASSWORD = 'TYPING_PASSWORD';

export const typingUsername = username => ({
  type: TYPING_USERNAME,
  username,
});

export const typingPassword = password => ({
  type: TYPING_PASSWORD,
  password,
});

export const login = (event, username, password) => {
  event.preventDefault();

  return async (dispatch) => {
    const {
      data: {
        data: {
          token,
        },
      },
    } = await axios.post('/login', {
      username,
      password,
    });
    localStorage.setItem('blog-admin-token', token);

    dispatch({
      type: LOGIN,
    });
    Router.push('/admin');
  };
};
