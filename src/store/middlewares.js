import {
  authError,
  authRequest,
  authSuccess,
  registerRequest,
} from './slices/authSlice';

export const loginMiddleware = store => next => action => {
  if (action.type === authRequest.toString()) {
    fetch(`https://loft-taxi.glitch.me/auth`, {
      method: 'POST',
      body: JSON.stringify(action.payload),
    })
      .then(response => {
        response.json();
        return response.token;
      })
      .then(token => {
        store.dispatch(authSuccess(token));
      })
      .catch(error => {
        store.dispatch(authError(error));
      });
  }

  return next(action);
};

export const registerMiddleware = store => next => action => {
  console.log(action.payload);
  if (action.type === registerRequest.toString()) {
    fetch(`https://loft-taxi.glitch.me/register`, {
      method: 'POST',
      body: JSON.stringify(action.payload),
    })
      .then(response => {
        response.json();
        return response.token;
      })
      .then(token => {
        store.dispatch(authSuccess(token));
      })
      .catch(error => {
        store.dispatch(authError(error));
      });
  }

  return next(action);
};
