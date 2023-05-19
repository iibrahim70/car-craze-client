import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
  return (
    <div className='mb-10 md:mb-20'>
      <h2 className='text-center text-4xl md:text-4xl font-bold'>Shop by Category</h2>
      <p className='text-center mt-5 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className='hidden md:flex' /> Ab pariatur praesentium illo, accusamus iure mollitia <br className='hidden md:flex' /> ipsum reprehenderit expedita veritatis cum.</p>
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Mini Fire Truck</Tab>
          <Tab>Police Car</Tab>
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