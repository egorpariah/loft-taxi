import React from 'react';
import AppRouter from '.';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.Map = jest.fn();

describe('AppRouter', () => {
  it('should render correctly when user is logined', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: true } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { container } = render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={['/order']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('map')).toBeInTheDocument();
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
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
});
