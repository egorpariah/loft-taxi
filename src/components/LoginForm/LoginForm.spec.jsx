import React from 'react';
import LoginForm from '.';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('LoginForm', () => {
  it('should render correctly', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: false } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <LoginForm />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Войти')).toBeTruthy();
    expect(screen.getByLabelText('Email')).toHaveAttribute('name', 'email');
    expect(screen.getByLabelText('Пароль')).toHaveAttribute('name', 'pass');
    expect(screen.getByText('Регистрация')).toBeInTheDocument();
    expect(screen.getByText('Новый пользователь?')).toBeInTheDocument();
    expect(screen.getByText('Регистрация')).toBeInTheDocument();
  });

  describe('on submit', () => {
    it('dispatches log in credentials', async () => {
      const mockStore = {
        getState: () => ({ user: { isLoggedIn: false } }),
        subscribe: () => {},
        dispatch: () => {},
      };

      const mockDispatch = jest.fn();
      render(
        <MemoryRouter>
          <Provider store={mockStore}>
            <LoginForm useDispatchHook={() => mockDispatch} />
          </Provider>
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText('Email');
      const passwordInput = screen.getByLabelText('Пароль');

      fireEvent.change(emailInput, { target: { value: 'testemail' } });
      fireEvent.change(passwordInput, { target: { value: 'testpass' } });
      fireEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() =>
        expect(mockDispatch).toHaveBeenCalledWith({
          payload: { email: 'testemail', password: 'testpass' },
          type: 'user/authRequest',
        })
      );
    });
  });
});
