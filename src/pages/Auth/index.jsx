import React from 'react';
import { useLocation } from 'react-router-dom';
import { LoginForm, RegisterForm } from '../../components';
import { FullLogo, Modal } from '../../ui';
import style from './Auth.module.scss';

export default function Auth() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={style.Auth}>
      <div className={style.Auth__logoWrapper}>
        <FullLogo
          className={style.Auth__logo}
          vertical={true}
        />
      </div>
      <div className={style.Auth__modalWrapper}>
        <Modal>
          {path === '/login' && <LoginForm />}
          {path === '/registration' && <RegisterForm />}
        </Modal>
      </div>
    </div>
  );
}
