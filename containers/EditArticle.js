import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditArticle from '../components/EditArticle';
import * as EditArticleActions from '../actions/EditArticle';

const mapStateToProps = ({
  editArticle: {
    typingTitle,
    typingUrl,
    typingCategory,
  },
}) => ({
  typingTitle,
  typingUrl,
  typingCategory,
});

const mapDispatchToProps = dispatch => bindActionCreators(EditArticleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
