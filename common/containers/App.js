import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from './Header';
import Footer from '../components/Footer';

const App = ({ route, location }) => {
  return (
    <div className="main">
      <Header location={location} />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(connect()(App));
