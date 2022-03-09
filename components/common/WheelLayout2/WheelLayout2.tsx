import { setBgColor } from '@lib/redux/slices/globalSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Footer } from '..';
import s from './WheelLayout2.module.css';

interface LayoutProps {
  children?: any;
}

const WheelLayout2 = (props: LayoutProps) => {
  const { children } = props;
  const [page, setPage] = useState(1);
  const wheelRef = React.useRef<HTMLDivElement>(null);

  const wheelHandler = (e: any) => {
    e.preventDefault();
    const deltaY = e.deltaY; // y 스크롤 방향 결정
    const innerHeight = window.innerHeight; // 현재 윈도우 사이즈 y 길이
    // const cnt = children.length;
    const scrollY = window.scrollY; // 윈도우 스크롤 y 위치
    let currentPage = Math.floor(scrollY / innerHeight) + 1;
    console.log(currentPage);
    if (deltaY > 0) {
      // 내리기
      if (currentPage < 5) {
        console.log(e);
        window.scrollTo({
          left: 0,
          top: innerHeight * currentPage,
          behavior: 'smooth',
        });
      }
    } else {
      // 올리기
      if (currentPage > 0) {
        if (scrollY > 0) {
          if (innerHeight * (5 - 2) >= scrollY) {
            window.scrollTo({
              left: 0,
              top: innerHeight * (currentPage - 2),
              behavior: 'smooth',
            });
          } else {
            // window.scrollTo({
            //   left: 0,
            //   top: innerHeight * (currentPage - 1),
            //   behavior: 'smooth',
            // });
          }
        }
      }
    }
  };
  React.useEffect(() => {
    const current = wheelRef.current;
    current.addEventListener('wheel', wheelHandler);
    return () => {
      current.removeEventListener('wheel', wheelHandler);
    };
  }, []);
  return (
    <div ref={wheelRef} className={s.root}>
      {/* {children} */}

      <div
        style={{
          backgroundColor: `black`,
        }}
      />
      <div
        style={{
          backgroundColor: `blue`,
        }}
      />
      <div
        style={{
          backgroundColor: `green`,
        }}
      />
      <div
        style={{
          backgroundColor: `yellow`,
        }}
      />
      <Footer />
    </div>
  );
};

export default WheelLayout2;
