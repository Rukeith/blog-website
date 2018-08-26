import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentForm from '../components/Article/CommentSection/CommentForm';
import * as CommentFormActions from '../actions/commentForm';

const mapStateToProps = ({ commentForm: { name, comment, comments } }) => ({
  name,
  comment,
  comments,
});

const mapDispatchToProps = dispatch => bindActionCreators(CommentFormActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
