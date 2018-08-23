import React, { Component } from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import TagsInput from './TagsInput';
import TableView from '../../containers/TableView';
import axios from '../../lib/axios';
import './style.scss';
import '../../static/react-table.min.scss';

const testData = [
  {
    _id: 0,
    title: 'article',
    createdAt: '2018-03-13',
    updatedAt: '2018-03-23',
    publishedAt: '2018-04-12',
    edit: 'edit',
  },
];

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName: '',
    };

    this.createTag = this.createTag.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }

  handleTyping(event) {
    this.setState({ tagName: event.target.value });
  }

  async createTag(event) {
    event.preventDefault();
    const { tagName } = this.state;
    await axios.post('/tags', { names: [tagName] }, {
      headers: {
        'Rukeith-Token': 'fake-token',
      },
    });
  }

  render() {
    return (
      <main id="portal">
        <Tabs>
          <TabList>
            <Tab>Articles</Tab>
            <Tab>Tags</Tab>
          </TabList>

          <TabPanel>
            <h2>kk</h2>
          </TabPanel>
          <TabPanel>
            <TagsInput />
            <TableView viewType="tag" />
          </TabPanel>
        </Tabs>
      </main>
    );
  }
}

export default AdminPage;
