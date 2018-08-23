import React from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import TagsInput from '../../containers/TagsInput';
import TableView from '../../containers/TableView';
import './style.scss';
import '../../static/react-table.min.scss';

// const testData = [
//   {
//     _id: 0,
//     title: 'article',
//     createdAt: '2018-03-13',
//     updatedAt: '2018-03-23',
//     publishedAt: '2018-04-12',
//     edit: 'edit',
//   },
// ];

export default () => (
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
