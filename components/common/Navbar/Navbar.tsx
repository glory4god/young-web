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
    window.scrollTo({ top: height, behavior: 'smooth' });
  };

  return (
    <div className={cn(s.root)} style={{ color: `${textColor}` }}>
      <div>
        <Link href={'/'}>
          <a>HAYOUNG YU</a>
        </Link>
      </div>
      <div className={s.menu}>
        <Link
          href={'/about'}
          // onClick={() => moveScrollBy(0)}
        >
          <a className={s.customButton}>About</a>
        </Link>
        <Link
          href={'/career'}
          //  onClick={() => moveScrollBy(innerHeight)}
        >
          <a className={s.customButton}>Career</a>
        </Link>
        <Link href={'/tech'}>
          <a
            className={s.customButton}
            // onClick={() => moveScrollBy(innerHeight * 2)}
          >
            Tech
          </a>
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
