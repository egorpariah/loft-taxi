import { profileSetCard } from '.';
import {
  setProfileCardRequest,
  setProfileCardSuccess,
  setProfileCardError,
} from '../slices/userSlice';
import { setCard } from '../../api';

const card = {
  cardName: 'John Doe',
  cardNumber: '4555 8987 5555 4747',
  expiryDate: '05/25',
  cvc: '666',
};
jest.mock('../../api', () => ({ setCard: jest.fn() }));

describe('profileSetCard', () => {
  it('dispatches a set card request', async () => {
    const dispatch = jest.fn();
    await profileSetCard(card)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setProfileCardRequest());
  });

  describe('when card setting succeeds', () => {
    beforeEach(() => {
      setCard.mockResolvedValue({
        success: true,
      });
    });

    it('dispatches success', async () => {
      const dispatch = jest.fn();
      await profileSetCard(card)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(setProfileCardSuccess(card));
    });
  });

  describe('when card setting fails', () => {
    const error = new Error('FAIL!');
    beforeEach(() => {
      setCard.mockRejectedValue(error);
    });
    it('dispatches failure', async () => {
      const dispatch = jest.fn();
      await profileSetCard(card)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(setProfileCardError(error));
    });
  });
});
