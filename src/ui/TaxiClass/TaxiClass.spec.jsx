import React from 'react';
import TaxiClass from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('TaxiClass', () => {
  it('should renders correctly', () => {
    render(<TaxiClass name='Средний' />);
    expect(screen.getByText('Средний')).toBeInTheDocument();
  });
});
