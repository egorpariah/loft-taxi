import { profileGetCard } from '.';
import {
  getProfileCardRequest,
  getProfileCardError,
  getProfileCardSuccess,
} from '../slices/userSlice';
import { getCard } from '../../api';

const card = {
  cardName: 'John Doe',
  cardNumber: '4555 8987 5555 4747',
  expiryDate: '05/25',
  cvc: '666',
};
jest.mock('../../api', () => ({ getCard: jest.fn() }));

describe('profileGetCard', () => {
  it('dispatches a get card request', async () => {
    const dispatch = jest.fn();
    await profileGetCard()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(getProfileCardRequest());
  });

  describe('when card getting succeeds', () => {
    beforeEach(() => {
      getCard.mockResolvedValue(card);
    });

    it('dispatches success', async () => {
      const dispatch = jest.fn();
      await profileGetCard('1234')(dispatch);
      expect(dispatch).toHaveBeenCalledWith(getProfileCardSuccess(card));
    });
  });

  describe('when card getting fails', () => {
    const error = new Error('FAIL!');
    beforeEach(() => {
      getCard.mockRejectedValue(error);
    });
    it('dispatches failure', async () => {
      const dispatch = jest.fn();
      await profileGetCard(card)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(getProfileCardError(error));
    });
  });
});
