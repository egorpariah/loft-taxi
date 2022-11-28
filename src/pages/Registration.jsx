import React from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Registration({setPage}) {
  return (
    <div>
      <h1>Регистрация</h1>
      <RegisterForm setPage={setPage}/>
    </div>
  );
}
