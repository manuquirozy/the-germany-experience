import PageContent from '../components/PageContent';
import { getTripData } from '../libs/sheets';

export default async function Berlin() {
  const data = await getTripData('berlin');

  return (
    <main className='bg-berlin bg-center bg-no-repeat bg-cover bg-fixed h-screen w-screen'>
      <PageContent city='berlin' data={data} />
    </main>
  );
}
