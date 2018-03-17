import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import * as HeaderActions from '../actions/header';

const mapStateToProps = state => ({
  menuOpen: state.header,
});

const mapDispatchToProps = dispatch => bindActionCreators(HeaderActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
