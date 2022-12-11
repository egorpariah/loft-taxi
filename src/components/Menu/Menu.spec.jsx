import React from 'react';
import Menu from '.';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Menu', () => {
  it('should renders correctly', () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <Menu />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Карта')).toBeTruthy();
    expect(screen.getByText('Профиль')).toBeTruthy();
    expect(screen.getByText('Выйти')).toBeTruthy();
  });
});
