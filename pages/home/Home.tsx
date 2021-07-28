import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Heading, SyncBar, Timer } from '@/components';

import { HomeContainer, MainContainer } from './styles';

const Home = () => {
  const [syncedUser] = useState<string>('');

  const sync = async () => {
    const { data } = await axios.get('/api/user/abc');
    console.log(data);
  };

  useEffect(() => {
    sync();
  }, []);

  return (
    <>
      <Head>
        <title>Solo Bingo</title>
        <meta
          name="description"
          content="Practice oot bingo without being in a race"
        />
      </Head>

      <HomeContainer>
        <Heading size="xl">Solo Bingo</Heading>
        <MainContainer>
          <Timer />
        </MainContainer>
      </HomeContainer>
      <SyncBar isSyncing={!syncedUser} />
    </>
  );
};

export default Home;
