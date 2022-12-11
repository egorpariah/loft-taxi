import { takeEvery, call, put } from 'redux-saga/effects';
import { login } from '../../api';
import {
  authRequest,
  authSuccess,
  getProfileCardRequest,
  requestError,
} from '../slices/userSlice';

export function* loginSaga(action) {
  try {
    const data = yield call(login, action.payload);
    if (!data.success) {
      yield put(requestError(data.error));
      return;
    }

    const token = data.token;
    yield put(authSuccess(token));
    localStorage.token = token;

    yield put(getProfileCardRequest(token));
  } catch (error) {
    yield put(requestError(error));
  }
}

export function* authorizationSaga() {
  yield takeEvery(authRequest, loginSaga);
}
