import React from 'react';
import styles from './Header.module.scss';

export default function Header({ setPage }) {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              href='/'
              onClick={e => {
                e.preventDefault();
                setPage('order');
              }}
            >
              Карта
            </a>
          </li>
          <li className={styles.item}>
            <a
              href='/'
              onClick={e => {
                e.preventDefault();
                setPage('profile');
              }}
            >
              Профиль
            </a>
          </li>
          <li className={styles.item}>
            <a
              href='/'
              onClick={e => {
                e.preventDefault();
                setPage('login');
              }}
            >
              Выйти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
