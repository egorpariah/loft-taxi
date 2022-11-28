import React from 'react';
import RegisterForm from '.';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('RegisterForm', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <RegisterForm />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Регистрация')).toBeTruthy();
    expect(screen.getByLabelText('Email*')).toHaveAttribute('name', 'email');
    expect(screen.getByLabelText('Как вас зовут?*')).toHaveAttribute(
      'name',
      'name'
    );
    expect(screen.getByLabelText('Придумайте пароль*')).toHaveAttribute(
      'name',
      'pass'
    );
    expect(screen.getByText('Зарегистрироваться')).toBeInTheDocument();
    expect(screen.getByText('Уже зарегестрированны?')).toBeInTheDocument();
    expect(screen.getByText('Войти')).toBeInTheDocument();
  });

  it('should register correctly', async () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <RegisterForm />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Войти')).toBeTruthy();

    fireEvent.submit(screen.getByTestId('register-form'), {
      target: {
        email: {
          value: 'test@test.com',
        },
        name: {
          value: 'Федор Иванов',
        },
        pass: {
          value: '1234',
        },
      },
    });
  });
});
