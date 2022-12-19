import orderReducer, {
  getAddressListRequest,
  getAddressListSuccess,
  getRouteRequest,
  getRouteSuccess,
  requestError,
  reset,
} from './orderSlice';

describe('userReducer', () => {
  describe('getAddressListRequest', () => {
    it('returns isLoading true', () => {
      expect(orderReducer({}, getAddressListRequest())).toEqual({
        isLoading: true,
        error: null,
      });
    });
  });

  describe('getAddressListSuccess', () => {
    it('returns addresses list', () => {
      expect(orderReducer({}, getAddressListSuccess(['address']))).toEqual({
        addresses: ['address'],
        isLoading: false,
      });
    });
  });

  describe('requestError', () => {
    it('returns error message and isLoading false', () => {
      expect(orderReducer({}, requestError('FAIL!'))).toEqual({
        error: 'FAIL!',
        isLoading: false,
      });
    });
  });

  describe('getRouteRequest', () => {
    it('returns isLoading true', () => {
      expect(orderReducer({}, getRouteRequest())).toEqual({
        isLoading: true,
        error: null,
      });
    });
  });

  describe('getRouteSuccess', () => {
    it('returns isSuccess true and sets route', () => {
      expect(orderReducer({}, getRouteSuccess([[1, 2]]))).toEqual({
        route: [[1, 2]],
        isLoading: false,
        isSuccess: true,
      });
    });
  });

  describe('reset', () => {
    it('returns isSuccess and isLoading false', () => {
      expect(orderReducer({}, reset())).toEqual({
        isSuccess: false,
        isLoading: false,
        error: null,
        route: [],
      });
    });
  });
});
