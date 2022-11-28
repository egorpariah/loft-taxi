import React from 'react';
import Menu from '.';
import { AuthProvider } from '../../context/AuthContext';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Menu', () => {
  it('should renders correctly', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Menu />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Карта')).toBeTruthy();
    expect(screen.getByText('Профиль')).toBeTruthy();
    expect(screen.getByText('Выйти')).toBeTruthy();
  });
});
