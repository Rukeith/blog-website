import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginPage from '../components/LoginPage';
import * as LoginActions from '../actions/login';

const mapStateToProps = ({ login: { username, password } }) => ({
  username,
  password,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
