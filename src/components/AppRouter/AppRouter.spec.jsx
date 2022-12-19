import React from 'react';
import AppRouter from '.';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../pages/Main', () => () => <div>Заказ</div>);
jest.mock('../../pages/Auth', () => () => <div>Логин</div>);

describe('AppRouter', () => {
  it('should render correctly when user is logined', () => {
    const mockStore = {
      getState: () => ({
        user: { isLoggedIn: true, profile: {} },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={['/order']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Заказ')).toBeInTheDocument();
  });

  it('should render correctly when user is not logined', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: false } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={['/order']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Логин')).toBeInTheDocument();
  });
});
