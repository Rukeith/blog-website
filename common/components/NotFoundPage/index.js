import React from 'react';
import './style.scss';

const NotFoundPage = () => (
  <main id="not-found-page">
    <div className="not-found-page-text-block">
      <h1>Oops... The page is not found.</h1>
      <h3>{'You found kitty\'s play room.'}</h3>
      <h3>Play with them ?</h3>
    </div>
    <img src="./background.jpg" alt="cat" />
  </main>
);

export default NotFoundPage;
