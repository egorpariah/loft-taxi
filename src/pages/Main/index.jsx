import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Map, Order, Profile } from '../../components';
import Header from '../../components/Header';
import style from './Main.module.scss';

export default function Main() {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  return (
    <div
      className={style.Main}
      onClick={() => navigate('/order')}
    >
      <Header />
      <main
        className={[
          style.Main__container,
          path === '/profile' ? ` ${style['Main__container--overlay']}` : '',
        ].join('')}
      >
        <Map />
        {path === '/order' && <Order className={style.Main__section} />}
      </main>
      {path === '/profile' && <Profile className={style.Main__section} />}
    </div>
  );
}
