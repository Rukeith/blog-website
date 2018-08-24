import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TableView from '../components/AdminPage/TableView';
import * as TableViewActions from '../actions/tableView';

const mapStateToProps = state => ({
  data: state.tableView.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(TableViewActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableView);
