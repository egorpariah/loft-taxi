import React from 'react';
import Map from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import mapboxgl from 'mapbox-gl';

mapboxgl.Map = jest.fn();

describe('Map', () => {
  it('should render correctly', () => {
    const { container } = render(<Map />);
    console.log(container.innerHTML);
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
