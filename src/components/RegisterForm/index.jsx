import React from 'react';
import { Button } from '../../ui';
import { Link as RouterLink } from 'react-router-dom';
import style from './RegisterForm.module.scss';
import { Input, Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../store/thunk/register';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const signin = e => {
    e.preventDefault();
    const { email, pass, name } = e.target;
    const user = {
      email: email.value,
      password: pass.value,
      name: name.value,
      surname: 'Доу',
    };
    dispatch(register(user));
  };

  return (
    <form
      data-testid='register-form'
      className={style.RegisterForm}
      onSubmit={signin}
    >
      <h2 className={style.RegisterForm__header}>Регистрация</h2>
      <div className={style.RegisterForm__inputItem}>
        <label
          className={style.RegisterForm__label}
          htmlFor='email'
        >
          Email*
        </label>
        <Input
          type='email'
          id='email'
          name='email'
          placeholder='mail@mail.ru'
        />
      </div>
      <div className={style.RegisterForm__inputItem}>
        <label
          className={style.RegisterForm__label}
          htmlFor='name'
        >
          Как вас зовут?*
        </label>
        <Input
          type='text'
          id='name'
          name='name'
          placeholder='Петр Иванов'
        />
      </div>
      <div
        className={`${style.RegisterForm__inputItem} ${style['RegisterForm__inputItem--last']}`}
      >
        <label
          className={style.RegisterForm__label}
          htmlFor='pass'
        >
          Придумайте пароль*
        </label>
        <Input
          type='password'
          id='pass'
          name='pass'
          placeholder='*************'
        />
      </div>
      <Button
        className={style.RegisterForm__button}
        type='submit'
      >
        Зарегистрироваться
      </Button>
      <div className={style.RegisterForm__footer}>
        Уже зарегестрированны?{' '}
        <Link
          underline='none'
          component={RouterLink}
          to='/login'
        >
          Войти
        </Link>
      </div>
    </form>
  );
}
