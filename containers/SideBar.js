import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideBar from '../components/SideBar';
import * as SideBarActions from '../actions/sideBar';

const mapStateToProps = ({ sideBar: { categories } }) => ({
  categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(SideBarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
