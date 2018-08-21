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
    Header: 'Create Time',
    accessor: 'createdAt',
  },
  {
    Header: 'Update Time',
    accessor: 'updatedAt',
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
    const { viewType = 'article', data } = this.props;
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
      data,
      sort,
      columns,
    };
    this.editTagName = this.editTagName.bind(this);
  }

  editTagName(cellInfo) {
    const { data } = this.state;

    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          const datac = [...data];
          datac[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data: datac });
        }}
      >
        {data[cellInfo.index][cellInfo.column.id]}
      </div>
    );
  }

  render() {
    const { data, sort, columns } = this.state;
    const newData = columns.map(item => ((item.accessor === 'name') ? Object.assign({}, item, { Cell: this.editTagName }) : item));

    return (
      <CheckboxTable
        className="select-table"
        defaultPageSize={10}
        columns={newData}
        data={data}
        defaultSorted={sort}
        noDataText="Create your knowledges"
      />
    );
  }
}

TableView.defaultProps = {
  viewType: 'article',
  data: [],
};

TableView.propTypes = {
  viewType: PropTypes.string,
  data: PropTypes.array,
};

export default TableView;
