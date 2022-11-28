import React from 'react';
import Map from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Map', () => {
  it('should render correctly', () => {
    render(<Map />);

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
