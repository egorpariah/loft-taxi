import { recordSaga } from '../../utils';
import { fetchRoute } from './routeSaga';
import { getRouteRequest } from '../slices/orderSlice';
import { getRoute } from '../../api';

jest.mock('../../api');

describe('routeSaga', () => {
  it('authenticates through api', async () => {
    getRoute.mockResolvedValue([[1, 2]]);
    const dispatched = await recordSaga(
      fetchRoute,
      getRouteRequest({ address1: 'Пулково (LED)', address2: 'Эрмитаж' })
    );
    expect(dispatched).toEqual([
      { payload: [[1, 2]], type: 'user/getRouteSuccess' },
    ]);
  });
});
