import React from 'react';
import LoginForm from '.';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('LoginForm', () => {
  it('should render correctly', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: false } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <LoginForm />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Войти')).toBeTruthy();
    expect(screen.getByLabelText('Email')).toHaveAttribute('name', 'email');
    expect(screen.getByLabelText('Пароль')).toHaveAttribute('name', 'pass');
    expect(screen.getByText('Регистрация')).toBeInTheDocument();
    expect(screen.getByText('Новый пользователь?')).toBeInTheDocument();
    expect(screen.getByText('Регистрация')).toBeInTheDocument();
  });
});
