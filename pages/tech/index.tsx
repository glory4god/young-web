import Link from 'next/link';
import React, { useCallback, useEffect, useRef } from 'react';

import { Footer, WheelLayout } from '@components/common';
import { GlassmorphismBox } from '@components/ui';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setBgColor } from '@lib/redux/slices/globalSlice';

const TechPage = () => {
  const [imageNumber, setImageNumber] = React.useState(1);
  const dispatch = useDispatch();

  // 칼라리스트
  const colors = ['black', 'black', 'black', 'black', 'black'];

  useEffect(() => {
    dispatch(setBgColor(colors[0]));
  }, []);
  return (
    <>
      <WheelLayout colors={colors}>
        <div className={cn('bg-black text-white')}>
          <GlassmorphismBox title="Frontend Tech">
            <div>
              <span>JavaScript ( es6+ )</span>
              <span>
                1. <span>React.js</span>
                <br />
                2. <span>Next.js</span>
                <br />
                3. <span>Vue.js</span>
                <br />
                4. <span>Typescript</span>
                <br />
              </span>
            </div>
            <div>
              <span>CSS</span>
              <span>
                1. <span>CSS</span>
                <br />
                2. <span>TailwindCSS</span>
                <br />
                3. <span>Module.css</span>
                <br />
                4. <span>Styled-Component</span>
                <br />
              </span>
            </div>
            <div>
              <span>Library</span>
              <span>
                1. <span>Chart ( elastic-charts / recharts / d3.chart )</span>
                <br />
                2. <span>UI ( Maturial-UI / antd )</span>
              </span>
            </div>
          </GlassmorphismBox>
        </div>
        <div className={cn('bg-black text-white')}>
          <GlassmorphismBox title="Frontend Tech">
            <div>
              <span>React.js</span>
              <span>
                1. <span>Create-React-App ( with Typescript )</span>
                <br />
                2. <span>ReactHooks / CustomHooks</span>
                <br />
                3. <span>Redux / ReduxTookit</span>
                <br />
                4. <span>SWR</span>
              </span>
            </div>
            <div>
              <span>Next.js</span>
              <span>
                1. <span>Create-Next-App ( with Typescript )</span>
                <br />
                2. <span>Next SSR/SSG</span>
                <br />
                3. <span>asd</span>
                <br />
              </span>
            </div>
            <div>
              <span>Vue.js</span>
              <span>
                1.{' '}
                <span>
                  Vue LifeCycle ( created / mounted / updated / watch ... )
                </span>
                <br />
                2. <span>Vuex</span>
              </span>
            </div>
          </GlassmorphismBox>
        </div>
        <div className={cn('bg-black text-white')}>
          <GlassmorphismBox title="Backend Tech">
            <div>
              <span>Java</span>
              <span>
                1. <span>Java-Spring</span>
                <br />
                2. <span>Spring-boot</span>
                <br />
                3. <span>WebSocket</span>
              </span>
            </div>
            <div>
              <span>NodeJs</span>
              <span>
                1. <span>Express</span>
                <br />
                2. <span>Next SSR/SSG</span>
                <br />
                3. <span>asd</span>
                <br />
              </span>
            </div>
            <div>
              <span>DataBase</span>
              <span>
                1. <span>MariaDB ( with Java )</span>
                <br />
                2. <span>MongoDB ( with NodeJs )</span>
              </span>
            </div>
          </GlassmorphismBox>
        </div>
        <div className={cn('bg-black text-white')}>
          <GlassmorphismBox title="Tool">
            <div>
              <span>Deploy</span>
              <span>
                1. <span>AWS EC2 / RDS</span>
                <br />
                2. <span>Vercel</span>
              </span>
            </div>
            <div>
              <span>Collaboration Tool</span>
              <span>
                1. <span>GitLab / GitHub</span>
                <br />
                2. <span>Zeplin / XD</span>
              </span>
            </div>
          </GlassmorphismBox>
        </div>
        <Footer />
      </WheelLayout>
    </>
  );
};

export default TechPage;
