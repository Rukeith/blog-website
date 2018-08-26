import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentList from '../components/Article/CommentSection/CommentList';
import * as CommentListActions from '../actions/commentList';

const mapStateToProps = ({ commentList: { comments } }) => ({
  comments,
});

const mapDispatchToProps = dispatch => bindActionCreators(CommentListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
