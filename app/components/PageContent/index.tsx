'use client';

import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Map from '../Map';
import Itinerary from '../Itinerary';

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
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1 className='text-2xl capitalize text-center pt-4'>{city}</h1>
      <div>
        <Tabs>
          <TabList>
            <Tab>Itinerary</Tab>
            <Tab>Map</Tab>
            <Tab>Tickets</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Itinerary data={data} />
            </TabPanel>
            <TabPanel>
              <Map
                isBerlin={city === 'berlin'}
                center={{ lat: 52.5068441, lng: 13.4247317 }}
                hotelPosition={{ lat: 52.5288341, lng: 13.399627 }}
              />
            </TabPanel>
            <TabPanel>Three</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default PageContent;
