import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import './style.scss';

export default ({ children, title = 'This is the default title' }) => (
  <div className="main">
    <Head>
      <title>
        { title }
      </title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Header />
    <main id="login-page">
      <h2>
        Admin Login
      </h2>
      <p>
        Welcome to share your thought. Make a different.
      </p>
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
    <Footer />
  </div>
);
