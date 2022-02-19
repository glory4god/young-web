import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';

import { Footer, WheelLayout } from '@components/common';

import cn from 'classnames';
import { GlassmorphismBox } from '@components/ui';
import { useDispatch } from 'react-redux';
import { setBgColor } from '@lib/redux/slices/globalSlice';
import { MY_INFO } from 'utils/constants';
import RecentBoard from '@components/RecentBoard';
import CustomButton from '@components/ui/CustomButton/CustomButton';

const Home: NextPage = () => {
  const [imageNumber, setImageNumber] = React.useState(1);
  const timer = useRef(null);
  const dispatch = useDispatch();

  const changeImage = React.useCallback(() => {
    if (imageNumber < 5) {
      setImageNumber((prev) => prev + 1);
    } else {
      setImageNumber(1);
    }
  }, [imageNumber]);

  // 칼라리스트
  const colors = ['white', 'white', 'white', 'white'];

  useEffect(() => {
    timer.current = setInterval(changeImage, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [imageNumber]);

  useEffect(() => {
    dispatch(setBgColor(colors[0]));
  }, []);

  return (
    <>
      <WheelLayout colors={colors}>
        <div
          style={{
            backgroundImage: `url('main_${imageNumber}.jpg')`,
          }}></div>
        <div
          style={{
            backgroundImage: `url('main_5.jpg')`,
          }}>
          <div
            className={cn('flex justify-center space-x-4 flex-wrap max-w-6xl')}>
            {MY_INFO.map((info, idx) => {
              return (
                <GlassmorphismBox
                  key={info.title}
                  className={idx === 0 && 'ml-4'}
                  title={info.title}
                  size="s">
                  <div dangerouslySetInnerHTML={{ __html: info.content }} />
                </GlassmorphismBox>
              );
            })}
          </div>
        </div>
        <div className={cn('')}>
          <RecentBoard />
        </div>
        <Footer />
      </WheelLayout>
    </>
  );
};

export default Home;
