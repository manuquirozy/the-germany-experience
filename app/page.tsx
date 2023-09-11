'use client';

import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

export default function Home() {
  const currentDate = DateTime.now();
  const tripDate = DateTime.fromISO('2023-11-05');
  const [dateDiff, setDateDiff] = useState({ days: 0 });

  useEffect(() => {
    setDateDiff(tripDate.diff(currentDate, ['days', 'minutes']).toObject());
  }, []);

  return (
    <main className=''>
      <div className='bg-home bg-center bg-no-repeat bg-cover bg-fixed h-screen w-screen flex flex-col items-center pt-10'>
        <div className='text-5xl'>{currentDate.toLocaleString(DateTime.TIME_SIMPLE)}</div>
        <div className='text-3xl'>{currentDate.toLocaleString({ weekday: 'long' })}</div>
        <div className='text-xl'>{currentDate.toLocaleString({ month: 'long', day: 'numeric' })}</div>
        <div className='text-3xl'>{dateDiff.days > 0 ? `${dateDiff.days} days to go` : `Day ${Math.abs(dateDiff.days)} of 14 `}</div>
      </div>
    </main>
  );
}
