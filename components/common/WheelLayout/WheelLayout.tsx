import React from 'react';
import s from './WheelLayout.module.css';

interface LayoutProps {
  children?: any;
}

const WheelLayout = (props: LayoutProps) => {
  const { children } = props;
  const wheelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const current = wheelRef.current;

    const wheel = (e: any) => {
      e.preventDefault();

      const deltaY = e.deltaY;
      const innerHeight = window.innerHeight;
      const cnt = children.length;
      const scrollTop = current.scrollTop;
      const currentPage = Math.floor(scrollTop / innerHeight) + 1;

      if (deltaY > 0) {
        // 내리기
        if (currentPage < cnt) {
          current.scrollTo({
            left: 0,
            top: innerHeight * currentPage,
            behavior: 'smooth',
          });
        }
      } else {
        // 올리기
        if (currentPage > 0) {
          if (innerHeight * (cnt - 2) >= scrollTop) {
            current.scrollTo({
              left: 0,
              top: innerHeight * (currentPage - 2),
              behavior: 'smooth',
            });
          } else {
            current.scrollTo({
              left: 0,
              top: innerHeight * (currentPage - 1),
              behavior: 'smooth',
            });
          }
        }
      }
    };

    current.addEventListener('wheel', wheel);
    return () => {
      current.removeEventListener('wheel', wheel);
    };
  });
  return (
    <div ref={wheelRef} className={s.root}>
      {children}
    </div>
  );
};

export default WheelLayout;
