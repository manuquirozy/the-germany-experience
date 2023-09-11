'use client';

import { Divider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faPalette } from '@fortawesome/free-solid-svg-icons';

interface PlacesProps {
  data: any;
}

const Places = ({ data }: PlacesProps) => {
  const category = {
    attraction: faCameraRetro,
    museum: faPalette,
  };

  return (
    <div className=''>
      {data.slice(1).map((place: any, index) => (
        <div key={index} className='bg-black bg-opacity-50 rounded-lg m-2 p-3 '>
          <div className='flex direction-row m-2'>
            <span>{<FontAwesomeIcon icon={category[place[0]]} size='lg' />}</span>
            <h2 className='pl-3'>{place[1]}</h2>
          </div>
          <Divider />
          <h3>Price: {place[2]}</h3>
          <h3>Opening hours: {place[3]}</h3>
        </div>
      ))}
    </div>
  );
};

export default Places;
