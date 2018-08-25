import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavItem from '../components/NavItem';
import * as LogoutActions from '../actions/logout';

const mapDispatchToProps = dispatch => bindActionCreators(LogoutActions, dispatch);

export default connect(null, mapDispatchToProps)(NavItem);
