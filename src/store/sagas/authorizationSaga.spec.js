import { recordSaga } from '../../utils';
import { loginSaga } from './authorizationSaga';
import { authRequest } from '../slices/userSlice';
import { login } from '../../api';

jest.mock('../../api');

describe('authorizationSaga', () => {
  it('authenticates through api', async () => {
    login.mockResolvedValue({ success: true, token: '1234' });
    const dispatched = await recordSaga(
      loginSaga,
      authRequest({ email: 'test@test.com', password: '123123' })
    );
    expect(dispatched).toEqual([
      { payload: '1234', type: 'user/authSuccess' },
      { payload: '1234', type: 'user/getProfileCardRequest' },
    ]);
  });
});
