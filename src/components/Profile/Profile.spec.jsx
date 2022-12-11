import React from 'react';
import Profile from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

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
      <Provider store={mockStore}>
        <Profile />
      </Provider>
    );
    expect(screen.getByText('Введите платежные данные')).toBeInTheDocument();
  });
});
