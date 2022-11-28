import React from 'react';
import Button from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('should renders correctly', () => {
    render(<Button>Кнопка</Button>);
    expect(screen.getByText('Кнопка')).toBeInTheDocument();
  });
});
