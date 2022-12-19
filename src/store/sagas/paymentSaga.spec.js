import { recordSaga } from '../../utils';
import { setCardSaga, getCardSaga } from './paymentSaga';
import {
  setProfileCardRequest,
  getProfileCardRequest,
} from '../slices/userSlice';
import { setCard, getCard } from '../../api';

jest.mock('../../api');

describe('paymentSaga', () => {
  it('sets card data in profile', async () => {
    setCard.mockResolvedValue({ success: true });
    const dispatched = await recordSaga(
      setCardSaga,
      setProfileCardRequest({
        cardName: 'John Doe',
        cardNumber: '1234',
        expiryDate: '02/25',
        cvc: '555',
        token: 1234,
      })
    );
    expect(dispatched).toEqual([
      {
        payload: {
          cardName: 'John Doe',
          cardNumber: '1234',
          expiryDate: '02/25',
          cvc: '555',
        },
        type: 'user/setProfileCardSuccess',
      },
    ]);
  });

  it('get card data', async () => {
    getCard.mockResolvedValue({
      cardName: 'John Doe',
      cardNumber: '1234',
      expiryDate: '02/25',
      cvc: '555',
    });
    const dispatched = await recordSaga(
      getCardSaga,
      getProfileCardRequest({
        token: 1234,
      })
    );
    expect(dispatched).toEqual([
      {
        payload: {
          cardName: 'John Doe',
          cardNumber: '1234',
          expiryDate: '02/25',
          cvc: '555',
        },
        type: 'user/getProfileCardSuccess',
      },
    ]);
  });
});
