import React from 'react';
import Modal from '../Modal/Modal';

export default function LoginForm({ setPage }) {
  return (
    <Modal>
      <form
        onSubmit={e => {
          e.preventDefault();
          setPage('order');
        }}
      >
        <h2>Войти</h2>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='mail@mail.ru'
          />
        </div>
        <div>
          <label htmlFor='pass'>Пароль</label>
          <input
            type='password'
            id='pass'
            placeholder='*************'
          />
          <a href='/'>Забыли пароль?</a>
        </div>
        <button type='submit'>Войти</button>
        <div>
          Новый пользователь?
          <a
            href='/'
            onClick={e => {
              e.preventDefault();
              setPage('registration');
            }}
          >
            Регистрация
          </a>
        </div>
      </form>
    </Modal>
  );
}
