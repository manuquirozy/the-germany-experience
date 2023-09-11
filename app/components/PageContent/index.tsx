'use client';

import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Map from '../Map';
import Itinerary from '../Itinerary';
import Places from '../Places';

interface PageContentProps {
  city: string;
  data?: any;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PageContent = ({ city, data }: PageContentProps) => {
  return (
    <div>
      <h1 className='text-2xl capitalize text-center pt-4'>{city}</h1>
      <div>
        <Tabs>
          <TabList>
            <Tab>Itinerary</Tab>
            <Tab>Places</Tab>
            <Tab>Map</Tab>
            <Tab>Tickets</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className='h-tab overflow-y-scroll'>
              <Itinerary data={data} />
            </TabPanel>
            <TabPanel className='h-tab overflow-y-scroll'>
              <Places data={data} />
            </TabPanel>
            <TabPanel className='h-tab overflow-y-scroll'>
              <Map
                isBerlin={city === 'berlin'}
                center={{ lat: 52.5068441, lng: 13.4247317 }}
                hotelPosition={{ lat: 52.5288341, lng: 13.399627 }}
              />
            </TabPanel>
            <TabPanel className='h-tab overflow-y-scroll'>Three</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default PageContent;
