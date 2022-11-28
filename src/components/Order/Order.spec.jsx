import React from 'react';
import Order from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/Map', () => () => <div>Карта</div>);

describe('Order', () => {
  it('should renders correctly', () => {
    render(<Order />);
    expect(screen.getByText('Заказ')).toBeInTheDocument();
  });
});
