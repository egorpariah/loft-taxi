import React from 'react';
import Map from '.';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import mapboxgl from 'mapbox-gl';

jest.mock('mapbox-gl');

describe('Map', () => {
  const mockStore = {
    getState: () => ({
      user: { isLoggedIn: true, profile: {} },
      order: { route: '' },
    }),
    subscribe: () => {},
    dispatch: () => {},
  };
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={mockStore}>
        <Map />
      </Provider>
    );
    console.log(container.innerHTML);
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
