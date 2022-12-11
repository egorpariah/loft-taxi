import { registerRequest } from '../../api';
import { authRequest, authSuccess, authError } from '../slices/userSlice';

export const register = user => async dispatch => {
  try {
    dispatch(authRequest());

    const data = await registerRequest(user);

    if (!data.success) {
      dispatch(authError(data.error));
    }

    const token = data.token;
    dispatch(authSuccess(token));
    localStorage.token = token;
  } catch (error) {
    dispatch(authError(error));
  }
};
