import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';

import { Footer, WheelLayout } from '@components/common';

import cn from 'classnames';
import { GlassmorphismBox } from '@components/ui';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setBgColor } from '@lib/redux/slices/globalSlice';

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
            <GlassmorphismBox className="ml-4" title="이름" size="s">
              <div>유하영</div>
            </GlassmorphismBox>
            <GlassmorphismBox title="MBTI" size="s">
              <div>ESTP</div>
            </GlassmorphismBox>
            <GlassmorphismBox title="키" size="s">
              <div>178.6 cm</div>
            </GlassmorphismBox>
            <GlassmorphismBox title="몸무게" size="s">
              <div>69 kg</div>
            </GlassmorphismBox>
            <GlassmorphismBox title="취미" size="s">
              <div>
                커피마시러
                <br />
                카페가기
              </div>
            </GlassmorphismBox>
            <GlassmorphismBox title="관심분야?" size="s">
              <div>
                최근들어 UI 인터랙션!?! <br />
                백오피스 개발?
              </div>
            </GlassmorphismBox>
            <GlassmorphismBox title="관심기술?" size="s">
              <div>SWR / CSS / responsive web / typescript generic</div>
            </GlassmorphismBox>
            <GlassmorphismBox title="2022 목표" size="s">
              <div>
                운동 다시 시작하기.. <br /> 수학 강의 영상 찍기!! <br /> 코테
                공부(js)
              </div>
            </GlassmorphismBox>
            <GlassmorphismBox title="경력" size="s">
              <div>1년도 안된.. 주니어</div>
            </GlassmorphismBox>
          </div>
        </div>
        <div className={cn('')}>HAYOUNG profile4</div>
        <Footer />
      </WheelLayout>
    </>
  );
};

export default Home;
