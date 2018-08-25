import Router from 'next/router';

export const LOGOUT = 'LOGOUT';

export const logout = event => async (dispatch) => {
  event.preventDefault();
  localStorage.removeItem('blog-admin-token');

  dispatch({
    type: LOGOUT,
  });
  Router.push('/');
};
