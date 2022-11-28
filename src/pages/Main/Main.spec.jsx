import React from 'react';
import Main from '.';
import '@testing-library/jest-dom';
import { AuthProvider } from '../../context/AuthContext';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../components/Map', () => () => <div>Mapbox</div>);

describe('Main', () => {
  it('should renders correctly', () => {
    render(
      <MemoryRouter initialEntries={['/order']}>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('Карта')).toBeInTheDocument();
    expect(screen.getByText('Профиль')).toBeInTheDocument();
    expect(screen.getByText('Выйти')).toBeInTheDocument();
    expect(screen.getByText('Заказ')).toBeInTheDocument();
    expect(screen.getByText('Mapbox')).toBeInTheDocument();
  });
});
