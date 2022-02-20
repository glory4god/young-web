import React from 'react';

import s from './Navbar.module.css';
import { useSelector } from 'react-redux';
import { selectGlobal } from '@lib/redux/slices/globalSlice';
import { Link } from '@components/ui';

import cn from 'classnames';
import { useRouter } from 'next/router';

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

  const { pathname } = useRouter();

  return (
    <div className={cn(s.root)} style={{ color: `${textColor}` }}>
      {console.log(pathname)}
      <div>
        <Link href={'/'}>
          <a>HAYOUNG YU</a>
        </Link>
      </div>
      <div className={s.menu}>
        <Link href={'/about'} selected={pathname.includes('about')}>
          About
        </Link>
        <Link href={'/career'} selected={pathname.includes('career')}>
          Career
        </Link>
        <Link href={'/tech'} selected={pathname.includes('tech')}>
          Tech
        </Link>
      </div>
      <div className={s.language}>
        <Link href={''}>ENG</Link>
        <Link href={''}>KOR</Link>
        <Link href={''}>MENU</Link>
      </div>
    </div>
  );
};

export default Navbar;
