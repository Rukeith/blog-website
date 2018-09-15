import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticleArea from '../components/BlogPage/ArticleArea';
import * as ArticleAreaActions from '../actions/articleArea';

const mapStateToProps = ({ articleArea: { articles } }) => ({
  articles,
});

const mapDispatchToProps = dispatch => bindActionCreators(ArticleAreaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleArea);
