import Router from 'next/router';
import axios from '../lib/axios';

export const LOGOUT = 'LOGOUT';

export const logout = (event) => {
  event.preventDefault();

  return async (dispatch) => {
    const token = localStorage.getItem('blog-admin-token');
    await axios.post('/logout', { token });

    dispatch({
      type: LOGOUT,
    });
    Router.push('/');
  };
};
