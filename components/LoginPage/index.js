import React from 'react';
import './style.scss';

export default () => (
  <main id="login-page">
    <h1>Admin Login</h1>
    <h3>Welcome to share your thought. Make a different.</h3>
    <form id="login-form" name="login" target="_top" action="/login" method="post">
      <input
        required
        form="login-form"
        type="text"
        name="username"
        placeholder="Username"
        formMethod="post"
        formEncType="application/x-www-form-urlencoded"
      />
      <input
        required
        form="login-form"
        type="password"
        name="password"
        min="8"
        placeholder="Password"
        formMethod="post"
        formEncType="application/x-www-form-urlencoded"
      />
      <button
        className="login-submit-btn"
        form="login-form"
        type="submit"
        name="login-submit"
        formTarget="_top"
        formMethod="post"
        formEncType="application/x-www-form-urlencoded"
      >
        Login
      </button>
    </form>
  </main>
);
