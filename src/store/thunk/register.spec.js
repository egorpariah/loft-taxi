import { register } from '.';
import { authRequest, authSuccess, authError } from '../slices/userSlice';
import { registerRequest } from '../../api';

jest.mock('../../api', () => ({ registerRequest: jest.fn() }));

describe('register', () => {
  it('dispatches a register request', async () => {
    const dispatch = jest.fn();
    await register({ email: 'email', pass: 'pass' })(dispatch);
    expect(dispatch).toHaveBeenCalledWith(authRequest());
  });

  describe('when register succeeds', () => {
    beforeEach(() => {
      registerRequest.mockResolvedValue({ success: true, token: '1234' });
    });

    it('dispatches success', async () => {
      const dispatch = jest.fn();
      await register({ email: 'email', pass: 'pass' })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(authSuccess('1234'));
    });
  });

  describe('when register fails', () => {
    const error = new Error('FAIL!');
    beforeEach(() => {
      registerRequest.mockRejectedValue(error);
    });
    it('dispatches failure', async () => {
      const dispatch = jest.fn();
      await register({ email: 'email', pass: 'pass' })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(authError(error));
    });
  });
});
