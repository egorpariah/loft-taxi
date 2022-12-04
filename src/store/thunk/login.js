import { authRequest, authSuccess, authError } from '../slices/userSlice';
import { profileGetCard } from './profileGetCard';
import { loginRequest } from '../../api';

export const login = user => async dispatch => {
  try {
    dispatch(authRequest());

    const data = await loginRequest(user);

    if (!data.success) {
      dispatch(authError(data.error));
      return;
    }

    const token = data.token;

    dispatch(authSuccess(token));
    localStorage.token = token;

    dispatch(profileGetCard(token));
  } catch (error) {
    dispatch(authError(error));
  }
};
