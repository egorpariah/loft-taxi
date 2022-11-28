import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';

jest.mock('./pages/Order.jsx', () => () => <div>Заказ</div>);
jest.mock('./pages/Profile', () => () => <div>Профиль</div>);

describe('App', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    expect(container.innerHTML).toMatch('Войти');
  });

  it('should login correctly', () => {
    const { container } = render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    expect(screen.getByTestId('login-form')).toBeTruthy();

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

    expect(container.innerHTML).toMatch('Карта');
  });

  it('should register correctly', () => {
    const { container } = render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('Регистрация'));
    expect(screen.getByTestId('register-form')).toBeTruthy();

    fireEvent.submit(screen.getByTestId('register-form'));

    expect(container.innerHTML).toMatch('Профиль');
  });

  describe('when clicked on navigation buttons', () => {
    it('opens the corresponding page', () => {
      const { container } = render(
        <AuthProvider>
          <App />
        </AuthProvider>
      );

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

      fireEvent.click(screen.getByText('Карта'));
      expect(container.innerHTML).toMatch('Заказ');
      fireEvent.click(screen.getByText('Профиль'));
      expect(container.innerHTML).toMatch('Профиль');
      fireEvent.click(screen.getByText('Выйти'));
      expect(container.innerHTML).toMatch('Войти');
    });
  });
});
