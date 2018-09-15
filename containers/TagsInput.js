import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TagsInput from '../components/AdminPage/TagsInput';
import * as TagsInputActions from '../actions/tagsInput';

const mapStateToProps = ({ tagsInput: { tagNames, typingName } }) => ({
  tagNames,
  typingName,
});

const mapDispatchToProps = dispatch => bindActionCreators(TagsInputActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TagsInput);
