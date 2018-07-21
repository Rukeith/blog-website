import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import IntroAvatar from './IntroAvatar';
import IntroSkill from './IntroSkill';

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
    <main id="intro-page">
      <IntroAvatar />
      <IntroSkill />
    </main>
    <Footer />
  </div>
);
