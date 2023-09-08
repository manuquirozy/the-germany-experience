const { format } = require('date-fns');

export default function Home() {
  const currentDate = new Date();
  return (
    <main className=''>
      <div className='bg-home bg-center bg-no-repeat bg-cover bg-fixed h-screen w-screen flex flex-col items-center pt-10'>
        <div className='text-5xl'>{format(currentDate, 'h:mm a')}</div>
        <div className='text-3xl'>{format(currentDate, 'EEEE')}</div>
        <div className='text-xl'>{format(currentDate, 'LLLL dd')}</div>
      </div>
    </main>
  );
}
