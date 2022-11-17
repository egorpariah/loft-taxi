import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

export default function Login({ setPage }) {
  return (
    <div>
      <h1>Логин</h1>
      <LoginForm setPage={setPage} />
    </div>
  );
}
