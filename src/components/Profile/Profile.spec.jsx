import React from 'react';
import Profile from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

describe('Profile', () => {
  it('should renders correctly', () => {
    const mockStore = {
      getState: () => ({
        user: {
          isLoggedIn: true,
          token: '',
          profile: {
            card: '',
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <MemoryRouter initialEntries={['/order']}>
        <Provider store={mockStore}>
          <Profile />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Введите платежные данные')).toBeInTheDocument();
  });
});
