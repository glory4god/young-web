import React from 'react';
import Link from 'next/link';

import s from './Navbar.module.css';
import { useSelector } from 'react-redux';
import { selectGlobal } from '@lib/redux/slices/globalSlice';
import cn from 'classnames';

const Navbar = () => {
  const { backgroundColor } = useSelector(selectGlobal);
  const textColor =
    backgroundColor === 'black'
      ? 'white'
      : backgroundColor === 'white'
      ? 'black'
      : backgroundColor === 'red'
      ? 'blue'
      : 'black';
  // const innerHeight = window.innerHeight;
  // FIXME: window scroll은 안되는듯..? ref 이용할 방법 고민
  const moveScrollBy = (height: number) => {
    console.log(height);
    window.scrollTo({ top: height, behavior: 'smooth' });
  };

  return (
    <div className={cn(s.root)} style={{ color: `${textColor}` }}>
      {console.log(backgroundColor)}
      <div>HAYOUNG YU</div>
      <div className={s.menu}>
        <Link
          href={'/'}
          // onClick={() => moveScrollBy(0)}
        >
          <a className={s.customButton}>1</a>
        </Link>
        <Link
          href={'/'}
          //  onClick={() => moveScrollBy(innerHeight)}
        >
          <a className={s.customButton}>2</a>
        </Link>
        <Link href={'/'}>
          <a
            className={s.customButton}
            // onClick={() => moveScrollBy(innerHeight * 2)}
          >
            3
          </a>
        </Link>
        <Link
          href={'/'}
          // onClick={() => moveScrollBy(innerHeight * 3)}
        >
          <a className={s.customButton}>4</a>
        </Link>
      </div>
      <div className={s.language}>
        <Link
          href={'/'}
          // onClick={() => moveScrollBy(innerHeight * 3)}
        >
          <a className={s.customButton}>ENG</a>
        </Link>
        <Link
          href={'/'}
          // onClick={() => moveScrollBy(innerHeight * 3)}
        >
          <a className={s.customButton}>KOR</a>
        </Link>
        <Link
          href={'/'}
          // onClick={() => moveScrollBy(innerHeight * 3)}
        >
          <a className={s.customButton}>MENU</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
