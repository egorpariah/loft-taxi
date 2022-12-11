import { login } from '.';
import { authRequest, authSuccess, authError } from '../slices/userSlice';
import { loginRequest } from '../../api';

jest.mock('../../api', () => ({ loginRequest: jest.fn() }));

describe('login', () => {
  it('dispatches a login request', async () => {
    const dispatch = jest.fn();
    await login({ email: 'email', pass: 'pass' })(dispatch);
    expect(dispatch).toHaveBeenCalledWith(authRequest());
  });
  describe('when login succeeds', () => {
    beforeEach(() => {
      loginRequest.mockResolvedValue({ success: true, token: '1234' });
    });

    it('dispatches success', async () => {
      const dispatch = jest.fn();
      await login({ email: 'email', pass: 'pass' })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(authSuccess('1234'));
    });
  });
  describe('when login fails', () => {
    const error = new Error('FAIL!');
    beforeEach(() => {
      loginRequest.mockRejectedValue(error);
    });
    it('dispatches failure', async () => {
      const dispatch = jest.fn();
      await login({ email: 'email', pass: 'pass' })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(authError(error));
    });
  });
});
