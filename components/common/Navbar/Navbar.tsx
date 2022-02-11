import React from 'react';

import s from './Navbar.module.css';

const Navbar = () => {
  const innerHeight = window.innerHeight;
  const moveScrollBy = (height: number) => {
    console.log(height);
    window.scrollTo({ top: height, behavior: 'smooth' });
  };

  return (
    <div className={s.root}>
      <div>L O G O</div>
      <div className={s.menu}>
        <span onClick={() => moveScrollBy(0)}>1</span>
        <span onClick={() => moveScrollBy(innerHeight)}>2</span>
        <span onClick={() => moveScrollBy(innerHeight * 2)}>3</span>
        <span onClick={() => moveScrollBy(innerHeight * 3)}>4</span>
      </div>
      <div className={s.language}>
        <span>ENG</span>
        <span>KOR</span>
        <span>MENU</span>
      </div>
    </div>
  );
};

export default Navbar;
