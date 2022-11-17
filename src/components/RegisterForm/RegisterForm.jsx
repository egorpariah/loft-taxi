import React from 'react';
import Modal from '../Modal/Modal';

export default function RegisterForm({ setPage }) {
  return (
    <Modal>
      <form
        onSubmit={e => {
          e.preventDefault();
          setPage('order');
        }}
      >
        <h2>Регистрация</h2>
        <div>
          <label htmlFor='email'>Email*</label>
          <input
            type='email'
            id='email'
            placeholder='mail@mail.ru'
          />
        </div>
        <div>
          <label htmlFor='email'>Как вас зовут?*</label>
          <input
            type='text'
            id='name'
            placeholder='Петр Александрович'
          />
        </div>
        <div>
          <label htmlFor='pass'>Придумайте пароль*</label>
          <input
            type='password'
            id='pass'
            placeholder='*************'
          />
        </div>
        <button type='submit'>Зарегистрироваться</button>
        <div>
          Уже зарегестрированны?
          <a
            href='/'
            onClick={e => {
              e.preventDefault();
              setPage('login');
            }}
          >
            Войти
          </a>
        </div>
      </form>
    </Modal>
  );
}
