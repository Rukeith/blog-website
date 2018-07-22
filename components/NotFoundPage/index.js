import React from 'react';
import './style.scss';

const NotFoundPage = () => (
  <main id="not-found-page">
    <div className="not-found-page-text-block">
      <h1>
        Oops... The page is not found.
      </h1>
      <h3>
        {'You found kitty\'s play room.'}
      </h3>
      <h3>
        Play with them ?
      </h3>
    </div>
    <img src="https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/system%2Fbackground.jpg?alt=media&token=b8671014-35f4-46b9-903c-20f96c80fef8" alt="cat-404-background" />
  </main>
);

export default NotFoundPage;
