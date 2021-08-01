import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

import { Heading, SyncBar } from '@/components';
import { TimerStatus } from '@/containers';
import * as storage from '@/config/storage';

import { HomeContainer, MainContainer } from './styles';

const Home = () => {
  const [syncedUser, setSyncedUser] = useState('');
  const [syncError, setSyncError] = useState(false);

  const sync = useCallback(async () => {
    try {
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
    } catch {
      setSyncError(true);
    }
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
          <TimerStatus />
        </MainContainer>
      </HomeContainer>
      <SyncBar isSynchronizing={!syncedUser} error={syncError} />
    </>
  );
};

export default Home;
