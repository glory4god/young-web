import { setBgColor } from '@lib/redux/slices/globalSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import s from './WheelLayout.module.css';

interface LayoutProps {
  children?: any;
  colors: string[];
}

const WheelLayout = (props: LayoutProps) => {
  const { children, colors } = props;
  const dispatch = useDispatch();
  const wheelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const current = wheelRef.current;

    const wheel = (e: any) => {
      e.preventDefault();

      const deltaY = e.deltaY;
      const innerHeight = window.innerHeight;
      const cnt = children.length;
      const scrollTop = current.scrollTop;
      let currentPage = Math.floor(scrollTop / innerHeight) + 1;
      if (deltaY > 0) {
        // 내리기
        if (currentPage < cnt) {
          current.scrollTo({
            left: 0,
            top: innerHeight * currentPage,
            behavior: 'smooth',
          });
          currentPage += 1;
        }
      } else {
        // 올리기
        if (currentPage > 0) {
          if (scrollTop > 0) {
            if (innerHeight * (cnt - 2) >= scrollTop) {
              current.scrollTo({
                left: 0,
                top: innerHeight * (currentPage - 2),
                behavior: 'smooth',
              });
              currentPage -= 1;
              console.log('두칸');
            } else {
              current.scrollTo({
                left: 0,
                top: innerHeight * (currentPage - 1),
                behavior: 'smooth',
              });
              console.log('한칸');
            }
          }
        }
      }
      dispatch(setBgColor(colors[currentPage - 1]));
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
