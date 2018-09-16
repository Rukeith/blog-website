import React from 'react';
import Link from 'next/link';
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
        <Link prefetch href="/create">
          <button className="btn create-btn" type="button">Create Article</button>
        </Link>
        <TableView viewType="article" />
      </TabPanel>
      <TabPanel>
        <TagsInput />
        <TableView viewType="tag" />
      </TabPanel>
    </Tabs>
  </main>
);
