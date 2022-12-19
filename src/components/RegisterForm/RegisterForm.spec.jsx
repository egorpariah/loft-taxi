import React from 'react';
import RegisterForm from '.';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('RegisterForm', () => {
  it('should render correctly', () => {
    const mockStore = {
      getState: () => ({ user: { isLoggedIn: false } }),
      subscribe: () => {},
      dispatch: () => {},
    };
    render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <RegisterForm />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Регистрация')).toBeTruthy();
    expect(screen.getByLabelText('Email*')).toHaveAttribute('name', 'email');
    expect(screen.getByLabelText('Как вас зовут?*')).toHaveAttribute(
      'name',
      'name'
    );
    expect(screen.getByLabelText('Придумайте пароль*')).toHaveAttribute(
      'name',
      'pass'
    );
    expect(screen.getByText('Зарегистрироваться')).toBeInTheDocument();
    expect(screen.getByText('Уже зарегестрированны?')).toBeInTheDocument();
    expect(screen.getByText('Войти')).toBeInTheDocument();
  });

  describe('on submit', () => {
    it('dispatches sign in credentials', async () => {
      const mockStore = {
        getState: () => ({ user: { isLoggedIn: false } }),
        subscribe: () => {},
        dispatch: () => {},
      };

      const mockDispatch = jest.fn();
      render(
        <MemoryRouter>
          <Provider store={mockStore}>
            <RegisterForm useDispatchHook={() => mockDispatch} />
          </Provider>
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText('Email*');
      const nameInput = screen.getByPlaceholderText('Петр');
      const surnameInput = screen.getByPlaceholderText('Иванов');
      const passwordInput = screen.getByLabelText('Придумайте пароль*');

      fireEvent.change(emailInput, { target: { value: 'testemail' } });
      fireEvent.change(nameInput, { target: { value: 'name' } });
      fireEvent.change(surnameInput, { target: { value: 'surname' } });
      fireEvent.change(passwordInput, { target: { value: 'testpass' } });

      fireEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() =>
        expect(mockDispatch).toHaveBeenCalledWith({
          payload: {
            email: 'testemail',
            password: 'testpass',
            name: 'name',
            surname: 'surname',
          },
          type: 'user/registerRequest',
        })
      );
    });
  });
});
