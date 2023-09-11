
"use client";

import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

interface Coordinates {
  lat: number;
  lng: number;
}

interface MapProps {
  isBerlin?: boolean;
  center: Coordinates;
  hotelPosition?: Coordinates;
}

const Map = ({ isBerlin, center, hotelPosition }: MapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
  });

  const hotelMarker = {
    path: 'M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z',
    fillOpacity: 2,
    fillColor: '#0398fc',
    strokeWeight: 1,
    rotation: 0,
    scale: 0.05,
  };

  const maxSchmelling = {
    path: 'M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z',
    fillOpacity: 2,
    fillColor: '#0398fc',
    strokeWeight: 1,
    rotation: 0,
    scale: 0.05,
  };

  const berlinAirport = {
    path: 'M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z',
    fillOpacity: 2,
    fillColor: '#0398fc',
    strokeWeight: 1,
    rotation: 0,
    scale: 0.05,
  };

  if (!isLoaded) {
    return <h2 className='text-center'>Loading...</h2>;
  } else {
    return (
      <GoogleMap mapContainerClassName='h-tab w-screen' center={center} zoom={11}>
        {hotelPosition && <MarkerF position={hotelPosition} icon={hotelMarker} />}
        {isBerlin && (
          <>
            <MarkerF position={{ lat: 52.5449405, lng: 13.4017721 }} icon={maxSchmelling} />{' '}
            <MarkerF position={{ lat: 52.3646302, lng: 13.5116501 }} icon={berlinAirport} />
          </>
        )}
      </GoogleMap>
    );
  }
};

export default Map;
