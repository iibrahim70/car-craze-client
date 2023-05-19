import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
  return (
    <div className='mb-20'>
      <Tabs>
        <TabList>
          <Tab style={{fontWeight: '600'}}>Sports Car</Tab>
          <Tab style={{fontWeight: '600' }}>Mini Fire Truck</Tab>
          <Tab style={{fontWeight: '600' }}>Police Car</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;