import React from 'react';
import LoginForm from '.';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('LoginForm', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Войти')).toBeTruthy();
    expect(screen.getByLabelText('Email')).toHaveAttribute('name', 'email');
    expect(screen.getByLabelText('Пароль')).toHaveAttribute('name', 'pass');
    expect(screen.getByText('Регистрация')).toBeInTheDocument();
    expect(screen.getByText('Новый пользователь?')).toBeInTheDocument();
    expect(screen.getByText('Регистрация')).toBeInTheDocument();
  });

  it('should authenticate correctly', async () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Войти')).toBeTruthy();

    fireEvent.submit(screen.getByTestId('login-form'), {
      target: {
        email: {
          value: 'test@test.com',
        },
        pass: {
          value: '1234',
        },
      },
    });
  });
});
