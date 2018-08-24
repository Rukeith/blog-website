import React, { Component } from 'react';
import Link from 'next/link';
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
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Create Time',
      accessor: 'createdAt',
    },
    {
      Header: 'Update Time',
      accessor: 'updatedAt',
    },
    {
      Header: 'Publish Time',
      accessor: 'publishedAt',
    },
    {
      Header: 'Edit',
      accessor: 'edit',
    },
    {
      Header: 'Delete',
      accessor: 'delete',
    },
  ],
};

class TableView extends Component {
  static editArticle({ original }) {
    return (
      <Link prefetch href={`/edit/articles/${original.id}`}>
        <button className="btn edit-btn" type="button">Edit</button>
      </Link>
    );
  }

  constructor(props) {
    super(props);
    const { viewType = 'article' } = this.props;

    this.state = {
      sort: (viewType === 'article') ? articleConfig.sort : tagConfig.sort,
      columns: (viewType === 'article') ? articleConfig.column : tagConfig.column,
    };
    this.editTagName = this.editTagName.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  async componentDidMount() {
    const { viewType, getTags, getArticles } = this.props;
    if (viewType === 'tag') {
      await getTags();
    } else if (viewType === 'article') {
      await getArticles();
    }
  }

  editTagName(cellInfo) {
    const { data, renameTag } = this.props;
    const tagName = data[cellInfo.index][cellInfo.column.id];

    return (
      <div
        title={tagName}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => renameTag(e.target.innerHTML, cellInfo.index, data)}
      >
        {tagName}
      </div>
    );
  }

  deleteTag({ original }) {
    const { deleteTag } = this.props;
    return (
      <button className="btn delete-btn" type="button" onClick={() => deleteTag(original.id)}>Delete</button>
    );
  }

  deleteArticle({ original }) {
    const { deleteArticle } = this.props;
    return (
      <button className="btn delete-btn" type="button" onClick={() => deleteArticle(original.id)}>Delete</button>
    );
  }

  render() {
    const { sort, columns } = this.state;
    const { data, viewType } = this.props;
    let newColumns = columns;
    if (viewType === 'tag') {
      newColumns = newColumns.map(item => ((item.accessor === 'name') ? Object.assign({}, item, { Cell: this.editTagName }) : item));
      newColumns = newColumns.map(item => ((item.accessor === 'delete') ? Object.assign({}, item, { Cell: this.deleteTag }) : item));
    } else if (viewType === 'article') {
      newColumns = newColumns.map(item => ((item.accessor === 'edit') ? Object.assign({}, item, { Cell: TableView.editArticle }) : item));
      newColumns = newColumns.map(item => ((item.accessor === 'delete') ? Object.assign({}, item, { Cell: this.deleteArticle }) : item));
    }

    return (
      <ReactTable
        className="select-table"
        data={data}
        columns={newColumns}
        defaultPageSize={10}
        defaultSorted={sort}
        noDataText="Share your knowledges"
      />
    );
  }
}

TableView.defaultProps = {
  data: [],
  viewType: 'article',
};

TableView.propTypes = {
  data: PropTypes.array,
  viewType: PropTypes.string,
  getTags: PropTypes.func.isRequired,
  renameTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

export default TableView;
