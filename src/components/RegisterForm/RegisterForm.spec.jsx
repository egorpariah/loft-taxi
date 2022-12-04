import React from 'react';
import RegisterForm from '.';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('RegisterForm', () => {
  it('should render correctly', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: false } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <RegisterForm />
        </Provider>
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
});
