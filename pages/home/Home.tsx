import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

import { Heading, SyncBar, Timer } from '@/components';
import * as storage from '@/config/storage';

import { HomeContainer, MainContainer } from './styles';

const Home = () => {
  const [syncedUser, setSyncedUser] = useState<string>('');

  const sync = useCallback(async () => {
    let userCode = localStorage[storage.USER_CODE];

    if (!userCode) {
      const { data } = await axios.post('api/user/code');
      userCode = data.code;

      localStorage.setItem(storage.USER_CODE, data.code);
    }

    const { data } = await axios.get(`/api/user/${userCode}`);

    if (!data.user && userCode) {
      localStorage.removeItem(storage.USER_CODE);
      await sync();
    }

    setSyncedUser(userCode);
  }, []);

  useEffect(() => {
    sync();
  }, [sync]);

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
      <SyncBar isSynchronizing={!syncedUser} />
    </>
  );
};

export default Home;
