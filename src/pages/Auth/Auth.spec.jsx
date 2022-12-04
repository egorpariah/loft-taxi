import React from 'react';
import Auth from '.';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('Auth', () => {
  it('should render correctly', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: false } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { container } = render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={['/login']}>
          <Auth />
        </MemoryRouter>
      </Provider>
    );
    console.log(container);
    expect(screen.getByText('Забыли пароль?')).toBeInTheDocument();
  });

  it('should route to Registration page', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: false } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={['/login']}>
          <Auth />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Регистрация'));

    expect(screen.getByText('Уже зарегестрированны?')).toBeInTheDocument();
  });

  it('should route to Login page', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: false } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={['/login']}>
          <Auth />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Регистрация'));
    expect(screen.getByText('Уже зарегестрированны?')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Войти'));
    expect(screen.getByText('Забыли пароль?')).toBeInTheDocument();
  });
});
