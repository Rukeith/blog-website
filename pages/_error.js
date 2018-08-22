import React from 'react';
import PropTypes from 'prop-types';
import '../static/error.scss';

class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : 404;
    return { statusCode, message: JSON.stringify(err) };
  }

  render() {
    const { statusCode, message } = this.props;
    return (
      <main id="not-found-page">
        <div className="not-found-page-text-block">
          <h1>
            Oops... The page is not found.
          </h1>
          <h3>
            { 'You found kitty\'s play room.' }
          </h3>
          <h3>
            { `Play with them ? You got ${statusCode}, error on ${message}` }
          </h3>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/system%2Fbackground.jpg?alt=media&token=b8671014-35f4-46b9-903c-20f96c80fef8" alt="cat-404-background" />
      </main>
    );
  }
}

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
  statusCode: PropTypes.number.isRequired,
};

export default ErrorPage;
