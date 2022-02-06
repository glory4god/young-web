import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { WheelLayout } from '@components/common';

const Home: NextPage = () => {
  const content = ['red', 'blue', 'black', 'white'];
  return (
    <>
      <Head>
        <title>HOME 페이지</title>
      </Head>
      <WheelLayout content={content}>
        {content.map((arr, idx) => {
          return (
            <div key={idx} style={{ backgroundColor: `${arr}` }}>
              HAYOUNG profile{arr}
            </div>
          );
        })}
      </WheelLayout>
    </>
  );
};

export default Home;
