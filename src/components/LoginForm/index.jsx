import React from 'react';
import { Button } from '../../ui';
import { Link as RouterLink } from 'react-router-dom';
import style from './LoginForm.module.scss';
import { Input, Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { authRequest } from '../../store/slices/userSlice';
import { useForm } from 'react-hook-form';

export default function LoginForm({ useDispatchHook = useDispatch }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatchHook();

  const authenticate = data => {
    const { email, pass } = data;
    const user = { email: email, password: pass };
    dispatch(authRequest(user));
    console.log(user, '!!!!!DISPATCH');
  };

  return (
    <form
      data-testid='login-form'
      className={style.LoginForm}
      onSubmit={handleSubmit(authenticate)}
    >
      <h2 className={style.LoginForm__header}>Войти</h2>
      <div className={style.LoginForm__inputItem}>
        <label
          className={style.LoginForm__label}
          htmlFor='email'
        >
          Email
        </label>
        <Input
          type='email'
          id='email'
          name='email'
          placeholder='mail@mail.com'
          required
          {...register('email')}
        />
      </div>
      <div
        className={`${style.LoginForm__inputItem} ${style['LoginForm__inputItem--last']}`}
      >
        <label
          className={style.LoginForm__label}
          htmlFor='pass'
        >
          Пароль
        </label>
        <Input
          type='password'
          id='pass'
          name='pass'
          placeholder='*************'
          className={style.LoginForm__pass}
          required
          {...register('pass')}
        />
        <Link
          underline='none'
          component={RouterLink}
          to='/registration'
          color='#828282'
          className={style.LoginForm__forget}
        >
          Забыли пароль?
        </Link>
      </div>
      <Button
        data-testid='submit-button'
        className={style.LoginForm__button}
        type='submit'
      >
        Войти
      </Button>
      <div className={style.LoginForm__footer}>
        Новый пользователь?{' '}
        <Link
          underline='none'
          component={RouterLink}
          to='/registration'
        >
          Регистрация
        </Link>
      </div>
    </form>
  );
}
