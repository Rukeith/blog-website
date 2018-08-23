import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import './style.scss';
import '../../../static/react-table.min.scss';

const CheckboxTable = checkboxHOC(ReactTable);

const tagColumn = [
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
    accessor: 'edit',
  },
];

const articleColumn = [
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
];

class TableView extends Component {
  constructor(props) {
    super(props);
    const { viewType = 'article' } = this.props;
    const columns = (viewType === 'article') ? articleColumn : tagColumn;
    const sort = (viewType === 'article') ? [
      {
        id: 'publishedAt',
        desc: true,
      },
    ] : [
      {
        id: 'amount',
        desc: true,
      },
    ];

    this.state = {
      sort,
      columns,
    };
    this.editTagName = this.editTagName.bind(this);
  }

  async componentDidMount() {
    const { getTags } = this.props;
    await getTags();
  }

  editTagName(cellInfo) {
    const { tags, renameTag } = this.props;

    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => renameTag(e.target.innerHTML, cellInfo.index, tags)}
      >
        {tags[cellInfo.index][cellInfo.column.id]}
      </div>
    );
  }

  render() {
    const { tags } = this.props;
    const { sort, columns } = this.state;
    const newData = columns.map(item => ((item.accessor === 'name') ? Object.assign({}, item, { Cell: this.editTagName }) : item));

    return (
      <CheckboxTable
        className="select-table"
        defaultPageSize={10}
        columns={newData}
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
};

export default TableView;
