import React from 'react';
import Modal from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Modal', () => {
  it('should renders correctly', () => {
    render(
      <Modal>
        <div>Модальное окно</div>
      </Modal>
    );
    expect(screen.getByText('Модальное окно')).toBeTruthy();
  });
});
