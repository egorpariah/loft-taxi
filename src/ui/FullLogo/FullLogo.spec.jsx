import React from 'react';
import FullLogo from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('FullLogo', () => {
  it('should renders correctly', () => {
    render(<FullLogo />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('lofttaxi')).toBeInTheDocument();
  });
});
