import React from 'react';
import style from './Header.module.scss';
import Menu from '../Menu';
import FullLogo from '../../ui/FullLogo';

export default function Header() {
  return (
    <header className={style.Header}>
      <FullLogo />
      <Menu className={style.Header__menu} />
    </header>
  );
}
