import React from 'react';
import Main from '.';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../components/Map', () => () => <div>Mapbox</div>);

describe('Main', () => {
  it('should renders correctly', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: true } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <MemoryRouter initialEntries={['/order']}>
        <Provider store={mockStore}>
          <Main />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Карта')).toBeInTheDocument();
    expect(screen.getByText('Профиль')).toBeInTheDocument();
    expect(screen.getByText('Выйти')).toBeInTheDocument();
    expect(screen.getByText('Заказ')).toBeInTheDocument();
    expect(screen.getByText('Mapbox')).toBeInTheDocument();
  });
});
