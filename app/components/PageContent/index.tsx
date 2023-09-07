'use client';

import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import Map from '../Map';

interface PageContentProps {
  city: string;
}

const muiTheme = createTheme(theme);

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PageContent = ({ city }: PageContentProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <h1 className='text-2xl capitalize text-center pt-4'>{city}</h1>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label='tabs'>
          <Tab label='Itinerary' {...a11yProps(0)} />
          <Tab label='Map' {...a11yProps(1)} />
          <Tab label='Tickets' {...a11yProps(2)} />
        </Tabs>
      </div>
      {value === 1 && (
        <Map
          isBerlin={city === 'berlin'}
          center={{ lat: 52.5068441, lng: 13.4247317 }}
          hotelPosition={{ lat: 52.5288341, lng: 13.399627 }}
        />
      )}
    </ThemeProvider>
  );
};

export default PageContent;
