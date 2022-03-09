import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';

import { Footer } from '@components/common';

import cn from 'classnames';
import { GlassmorphismBox } from '@components/ui';
import { useDispatch } from 'react-redux';
import { setBgColor } from '@lib/redux/slices/globalSlice';
import { MY_INFO } from 'utils/constants';
import RecentBoard from '@components/RecentBoard';
import CustomButton from '@components/ui/CustomButton/CustomButton';
import WheelLayout2 from '@components/common/WheelLayout2';

const test: NextPage = () => {
  return (
    <>
      <WheelLayout2>
        {/* <div
          style={{
            backgroundColor: `black`,
          }}></div>
        <div
          style={{
            backgroundColor: `blue`,
          }}></div>
        <div
          style={{
            backgroundColor: `green`,
          }}></div>
        <div
          style={{
            backgroundColor: `yellow`,
          }}></div>
        <Footer /> */}
      </WheelLayout2>

      <div>asdasd</div>
      <div>asdasd</div>
      <div>asdasd</div>
      <div>asdasd</div>
      <div>asdasd</div>
    </>
  );
};

export default test;
