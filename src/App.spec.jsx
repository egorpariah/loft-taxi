import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import mapboxgl from 'mapbox-gl';

mapboxgl.Map = jest.fn();

jest.mock('./pages/Main', () => () => <div>Заказ</div>);

describe('App', () => {
  it('should renders correctly', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: false } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { container } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    expect(container.innerHTML).toMatch('Войти');
  });

  it('should renders correctly when user is logined', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: true } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const { container } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );

    expect(container.innerHTML).toMatch('Заказ');
  });
});
