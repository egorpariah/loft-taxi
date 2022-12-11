import { takeEvery, call, put } from 'redux-saga/effects';
import { register } from '../../api';
import {
  registerRequest,
  authSuccess,
  requestError,
} from '../slices/userSlice';

export function* registerSaga(action) {
  try {
    const data = yield call(register, action.payload);
    if (!data.success) {
      yield put(requestError(data.error));
      return;
    }

    const token = data.token;
    yield put(authSuccess(token));
    localStorage.token = token;
  } catch (error) {
    yield put(requestError(error));
  }
}

export function* registrationSaga() {
  yield takeEvery(registerRequest, registerSaga);
}
