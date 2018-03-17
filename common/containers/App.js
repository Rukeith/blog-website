import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from './Header';
import Footer from '../components/Footer';

const styles = {
  display: 'grid',
  gridTemplateRows: '50px 1fr 300px',
};

const App = ({ route, location }) => {
  return (
    <div style={styles}>
      <Header location={location} />
      {/* {renderRoutes(route.routes)} */}
      {/* <Footer /> */}
    </div>
  );
};

App.propTypes = {
  // auth: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

// const mapStateToProps = state => ({ auth: state.user.token !== '' });

export default withRouter(connect()(App));
