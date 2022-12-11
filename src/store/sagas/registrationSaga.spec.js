import { recordSaga } from '../../utils';
import { registerSaga } from './registrationSaga';
import { registerRequest } from '../slices/userSlice';
import { register } from '../../api';

jest.mock('../../api');

describe('registratinoSaga', () => {
  it('authenticates through api', async () => {
    register.mockResolvedValue({ success: true, token: '1234' });
    const dispatched = await recordSaga(
      registerSaga,
      registerRequest({
        email: 'test@test.com',
        password: '123123',
        name: 'John',
        surname: 'Doe',
      })
    );
    expect(dispatched).toEqual([{ payload: '1234', type: 'user/authSuccess' }]);
  });
});
