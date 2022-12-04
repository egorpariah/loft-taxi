import { setCard } from '../../api';
import {
  setProfileCardRequest,
  setProfileCardSuccess,
  setProfileCardError,
} from '../slices/userSlice';

export const profileSetCard = card => async dispatch => {
  try {
    dispatch(setProfileCardRequest());

    const data = await setCard(card);

    if (!data.success) {
      dispatch(setProfileCardError(data.error));
      return;
    }

    delete card.token;
    dispatch(setProfileCardSuccess(card));
    localStorage.profile = JSON.stringify({
      card,
    });
  } catch (error) {
    dispatch(setProfileCardError(error));
  }
};
