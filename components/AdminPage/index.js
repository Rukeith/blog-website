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

export default () => (
  <main id="portal">
    <Tabs>
      <TabList>
        <Tab>Articles</Tab>
        <Tab>Tags</Tab>
      </TabList>

      <TabPanel>
        <TableView viewType="article" />
      </TabPanel>
      <TabPanel>
        <TagsInput />
        <TableView viewType="tag" />
      </TabPanel>
    </Tabs>
  </main>
);
