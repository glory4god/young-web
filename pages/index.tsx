import { NextPage } from 'next';
import React from 'react';

import { Navbar, Footer, WheelLayout } from '@components/common';

import cn from 'classnames';

const Home: NextPage = () => {
  return (
    <>
      <WheelLayout>
        <div className={cn('')}>HAYOUNG profile1</div>
        <div className={cn('')}>HAYOUNG profile2</div>
        <div className={cn('')}>HAYOUNG profile3</div>
        <div className={cn('')}>HAYOUNG profile4</div>
        <Footer />
      </WheelLayout>
    </>
  );
};

export default Home;
