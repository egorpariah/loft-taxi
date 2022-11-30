import React from 'react';
import { useLocation } from 'react-router-dom';
import { Map, Order, Profile } from '../../components';
import Header from '../../components/Header';
import style from './Main.module.scss';

export default function Main() {
  const path = useLocation().pathname;

  return (
    <div className={style.Main}>
      <Header />
      <main className={style.Main__container}>
        <Map />
        {path === '/order' && <Order className={style.Main__section} />}
        {path === '/profile' && <Profile className={style.Main__section} />}
      </main>
    </div>
  );
}
