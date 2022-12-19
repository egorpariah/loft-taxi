import { recordSaga } from '../../utils';
import { fetchAddresses } from './addressListSaga';
import { getAddressListRequest } from '../slices/orderSlice';
import { getAddressList } from '../../api';

jest.mock('../../api');

describe('routeSaga', () => {
  it('authenticates through api', async () => {
    getAddressList.mockResolvedValue({
      addresses: ['Пулково (LED)', 'Эрмитаж'],
    });
    const dispatched = await recordSaga(
      fetchAddresses,
      getAddressListRequest()
    );
    expect(dispatched).toEqual([
      {
        payload: ['Пулково (LED)', 'Эрмитаж'],
        type: 'user/getAddressListSuccess',
      },
    ]);
  });
});
