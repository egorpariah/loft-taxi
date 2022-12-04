import { getCard } from '../../api';
import {
  getProfileCardRequest,
  getProfileCardSuccess,
  getProfileCardError,
} from '../slices/userSlice';

export const profileGetCard = token => async dispatch => {
  try {
    dispatch(getProfileCardRequest());

    const card = await getCard(token);

    if (!('cardName' in card)) {
      dispatch(getProfileCardError(card.error));
      return;
    }

    dispatch(getProfileCardSuccess(card));
    localStorage.profile = JSON.stringify({
      card,
    });
  } catch (error) {
    dispatch(getProfileCardError(error));
  }
};
