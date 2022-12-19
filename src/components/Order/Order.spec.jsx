import React from 'react';
import Order from '.';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Order', () => {
  it('should renders correctly', () => {
    jest.spyOn(Redux, 'useSelector').mockReturnValue([1, 2, 3]);
    const mockStore = {
      getState: () => ({
        user: { isLoggedIn: true, profile: {} },
        order: { addresses: 1, isSuccess: false },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <MemoryRouter initialEntries={['/order']}>
        <Provider store={mockStore}>
          <Order />
        </Provider>
      </MemoryRouter>
    );
    expect(
      screen.getByText('Платёжные данные не заполнены')
    ).toBeInTheDocument();
  });

  describe('on submit', () => {
    it('dispatches order data', async () => {
      const mockStore = {
        getState: () => ({
          user: {
            isLoggedIn: true,
            profile: {
              card: '1234',
            },
          },
          order: { addresses: 1, isSuccess: false },
        }),
        subscribe: () => {},
        dispatch: () => {},
      };

      jest
        .spyOn(Redux, 'useSelector')
        .mockReturnValueOnce([1, 2, 3])
        .mockReturnValueOnce(false)
        .mockReturnValueOnce({ card: '1234' });

      const mockDispatch = jest.fn();
      render(
        <MemoryRouter>
          <Provider store={mockStore}>
            <Order useDispatchHook={() => mockDispatch} />
          </Provider>
        </MemoryRouter>
      );
      fireEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() =>
        expect(mockDispatch).toBeCalledWith({
          payload: { address1: 'Откуда', address2: 'Куда' },
          type: 'order/getRouteRequest',
        })
      );
    });
  });
});
