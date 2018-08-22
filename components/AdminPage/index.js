import React from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import TableView from './TableView';
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

const tagData = [
  {
    _id: 0,
    name: 'tag',
    amount: 13,
    createdAt: '2018-03-13',
    updatedAt: '2018-03-23',
  },
];

const AdminPage = () => (
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
        <div className="create-tag-input">
          <input type="text" />
          <button type="submit">Create Tag</button>
        </div>
        <TableView viewType="tag" data={tagData} />
      </TabPanel>
    </Tabs>
  </main>
);

export default AdminPage;
