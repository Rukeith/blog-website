import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import axios from '../../../lib/axios';
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
    this.updateTagName = this.updateTagName.bind(this);
  }

  async componentDidMount() {
    const { getTags } = this.props;
    await getTags();
  }

  async updateTagName(e, cellInfo) {
    const { data } = this.state;
    const stateData = [...data];
    const tag = stateData[cellInfo.index];
    const name = e.target.innerHTML;

    await axios.patch(`/tags/${tag.id}`, { name }, {
      headers: {
        'Rukeith-Token': process.env.TOKEN,
      },
    });

    // @TODO
    // Need to handle error
    stateData[cellInfo.index].name = name;
    this.setState({ data: stateData });
  }

  editTagName(cellInfo) {
    const { tags } = this.props;

    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => this.updateTagName(e, cellInfo)}
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
};

export default TableView;
