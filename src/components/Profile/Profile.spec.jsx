import React from 'react';
import Profile from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Profile', () => {
  it('should renders correctly', () => {
    render(<Profile />);
    expect(screen.getByText('Профиль')).toBeInTheDocument();
  });
});
