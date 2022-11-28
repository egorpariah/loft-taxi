import React from 'react';
import Auth from '.';
import { MemoryRouter, useLocation } from 'react-router-dom';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AuthProvider } from '../../context/AuthContext';

describe('Auth', () => {
  it('should render correctly', () => {
    const { container } = render(
      <AuthProvider>
        <MemoryRouter initialEntries={['/login']}>
          <Auth />
        </MemoryRouter>
      </AuthProvider>
    );
    console.log(container);
    expect(screen.getByText('Забыли пароль?')).toBeInTheDocument();
  });

  it('should route to Registration page', () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={['/login']}>
          <Auth />
        </MemoryRouter>
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('Регистрация'));

    expect(screen.getByText('Уже зарегестрированны?')).toBeInTheDocument();
  });

  it('should route to Login page', () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={['/login']}>
          <Auth />
        </MemoryRouter>
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('Регистрация'));
    expect(screen.getByText('Уже зарегестрированны?')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Войти'));
    expect(screen.getByText('Забыли пароль?')).toBeInTheDocument();
  });
});
