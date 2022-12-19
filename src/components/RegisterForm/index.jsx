import React from 'react';
import { Button } from '../../ui';
import { Link as RouterLink } from 'react-router-dom';
import style from './RegisterForm.module.scss';
import { Input, Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { registerRequest } from '../../store/slices/userSlice';
import { useForm } from 'react-hook-form';

export default function RegisterForm({ useDispatchHook = useDispatch }) {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();

  const signin = data => {
    const { email, pass, name, surname } = data;
    const user = {
      email: email,
      password: pass,
      name: name,
      surname: surname,
    };
    dispatch(registerRequest(user));
  };

  return (
    <form
      data-testid='register-form'
      className={style.RegisterForm}
      onSubmit={handleSubmit(signin)}
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
          required
          {...register('email')}
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
          placeholder='Петр'
          required
          {...register('name')}
        />
        <Input
          type='text'
          id='surname'
          name='surname'
          placeholder='Иванов'
          required
          {...register('surname')}
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
          required
          {...register('pass')}
        />
      </div>
      <Button
        className={style.RegisterForm__button}
        type='submit'
        data-testid='submit-button'
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
