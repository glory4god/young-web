import useDebounce from '@lib/hooks/useDebounce';
import React from 'react';
import s from './WheelLayout.module.css';

interface LayoutProps {
  children?: any;
  content: any[];
}

const WheelLayout = (props: LayoutProps) => {
  const { children, content } = props;
  const wheelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const current = wheelRef.current;

    const wheel = (e: any) => {
      e.preventDefault();
      const deltaY = e.deltaY;
      const innerHeight = window.innerHeight;
      const lastScrollTop = innerHeight * (content.length - 1);
      const scrollTop = current.scrollTop;
      console.log(e);
      console.log(current.scrollTop);
      console.log(innerHeight);
      if (deltaY < 0) {
        // 내리기
        if (lastScrollTop >= scrollTop) {
          current.scrollTo(0, scrollTop + innerHeight);
        }
      } else {
        // 올리기
        if (lastScrollTop > 0) {
          current.scrollTo(0, scrollTop - innerHeight);
        }
      }
    };

    current.addEventListener(
      'wheel',
      useDebounce({ value: wheel, delay: 500 }),
    );
    return () => {
      current.removeEventListener('wheel', wheel);
    };
  }, []);
  return (
    <div ref={wheelRef} className={s.root}>
      {children}
    </div>
  );
};

export default WheelLayout;
