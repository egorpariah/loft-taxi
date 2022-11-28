import React from 'react';
import Header from '.';
import { render } from '@testing-library/react';

jest.mock('../../ui/FullLogo', () => () => <div>Лого</div>);
jest.mock('../Menu/', () => () => <div>Меню</div>);

describe('Header', () => {
  it('should renders correctly', () => {
    const { container } = render(<Header />);
    expect(container.innerHTML).toMatch('Лого');
    expect(container.innerHTML).toMatch('Меню');
  });
});
