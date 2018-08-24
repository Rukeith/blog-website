import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import './style.scss';
import '../../../static/react-table.min.scss';

const tagConfig = {
  sort: [
    {
      id: 'amount',
      desc: true,
    },
  ],
  column: [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
    {
      Header: 'Delete',
      accessor: 'delete',
      width: 150,
    },
  ],
};

const articleConfig = {
  sort: [
    {
      id: 'publishedAt',
      desc: true,
    },
  ],
  column: [
    {
      Hedaer: 'Title',
      accessor: 'title',
    },
    {
      Hedaer: 'Create Time',
      accessor: 'createdAt',
    },
    {
      Hedaer: 'Update Time',
      accessor: 'updatedAt',
    },
    {
      Hedaer: 'Publish Time',
      accessor: 'publishedAt',
    },
    {
      Hedaer: 'Edit',
      accessor: 'edit',
    },
    {
      Hedaer: 'Publish',
      accessor: 'publishedAt',
    },
  ],
};

class TableView extends Component {
  constructor(props) {
    super(props);
    const { viewType = 'article' } = this.props;

    this.state = {
      sort: (viewType === 'article') ? articleConfig.sort : tagConfig.sort,
      columns: (viewType === 'article') ? articleConfig.column : tagConfig.column,
    };
    this.editTagName = this.editTagName.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  async componentDidMount() {
    const { getTags } = this.props;
    await getTags();
  }

  editTagName(cellInfo) {
    const { tags, renameTag } = this.props;
    const tagName = tags[cellInfo.index][cellInfo.column.id];

    return (
      <div
        title={tagName}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => renameTag(e.target.innerHTML, cellInfo.index, tags)}
      >
        {tagName}
      </div>
    );
  }

  deleteTag({ original }) {
    const { deleteTag } = this.props;
    return (
      <button className="delete-tag-btn" type="button" onClick={() => deleteTag(original.id)}>Delete</button>
    );
  }

  render() {
    const { sort, columns } = this.state;
    const { tags, viewType } = this.props;
    let newColumns;
    if (viewType === 'tag') {
      newColumns = columns.map(item => ((item.accessor === 'name') ? Object.assign({}, item, { Cell: this.editTagName }) : item));
      newColumns = newColumns.map(item => ((item.accessor === 'delete') ? Object.assign({}, item, { Cell: this.deleteTag }) : item));
    }

    return (
      <ReactTable
        className="select-table"
        defaultPageSize={10}
        columns={newColumns}
        data={tags}
        defaultSorted={sort}
        noDataText="Create your knowledges"
      />
    );
  }
}

TableView.defaultProps = {
  tags: [],
  viewType: 'article',
};

TableView.propTypes = {
  tags: PropTypes.array,
  viewType: PropTypes.string,
  getTags: PropTypes.func.isRequired,
  renameTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
};

export default TableView;
