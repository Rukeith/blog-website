import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const LoginPage = ({
  username,
  password,
  login,
  typingUsername,
  typingPassword,
}) => (
  <main id="login-page">
    <h1>Admin Login</h1>
    <h3>Welcome to share your thought. Make a different.</h3>
    <form id="login-form" name="login" acceptCharset="utf-8" onSubmit={event => login(event, username, password)}>
      <input
        required
        type="text"
        name="username"
        value={username}
        className="login-form"
        placeholder="Username"
        onChange={event => typingUsername(event.target.value)}
      />
      <input
        required
        type="password"
        name="password"
        value={password}
        className="login-form"
        min="8"
        placeholder="Password"
        onChange={event => typingPassword(event.target.value)}
      />
      <button
        type="submit"
        name="login-submit"
        className="login-form login-submit-btn"
      >
        Login
      </button>
    </form>
  </main>
);

LoginPage.defaultProps = {
  username: '',
  password: '',
};

LoginPage.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  login: PropTypes.func.isRequired,
  typingUsername: PropTypes.func.isRequired,
  typingPassword: PropTypes.func.isRequired,
};

export default LoginPage;
