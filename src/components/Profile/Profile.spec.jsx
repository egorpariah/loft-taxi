import React from 'react';
import Profile from '.';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Profile', () => {
  it('should renders correctly', () => {
    const mockStore = {
      getState: () => ({
        user: {
          isLoggedIn: true,
          token: '',
          profile: {
            card: '',
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <MemoryRouter initialEntries={['/order']}>
        <Provider store={mockStore}>
          <Profile />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Введите платежные данные')).toBeInTheDocument();
  });

  describe('on submit', () => {
    it('dispatches card data', async () => {
      const mockStore = {
        getState: () => ({
          user: {
            isLoggedIn: true,
            profile: {
              card: '1234',
            },
            token: '5555',
          },
          order: { addresses: 1, isSuccess: false },
        }),
        subscribe: () => {},
        dispatch: () => {},
      };

      jest
        .spyOn(Redux, 'useSelector')
        .mockReturnValueOnce(false)
        .mockReturnValueOnce('5555')
        .mockReturnValueOnce({ card: '1234' });

      const mockDispatch = jest.fn();
      render(
        <MemoryRouter>
          <Provider store={mockStore}>
            <Profile useDispatchHook={() => mockDispatch} />
          </Provider>
        </MemoryRouter>
      );

      const cardNameInput = screen.getByLabelText('Имя владельца');
      const cardInput = screen.getByLabelText('Номер карты');
      const expireInput = screen.getByLabelText('MM/YY');
      const cvcInput = screen.getByLabelText('CVC');

      fireEvent.change(cardNameInput, { target: { value: 'John Doe' } });
      fireEvent.change(cardInput, { target: { value: '1234' } });
      fireEvent.change(expireInput, { target: { value: '02/25' } });
      fireEvent.change(cvcInput, { target: { value: '666' } });
      fireEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() =>
        expect(mockDispatch).toBeCalledWith({
          payload: {
            cardName: 'John Doe',
            cardNumber: '1234',
            expiryDate: '02/25',
            cvc: '666',
            token: undefined,
          },
          type: 'user/setProfileCardRequest',
        })
      );
    });
  });
});
