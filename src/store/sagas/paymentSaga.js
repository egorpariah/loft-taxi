import { takeEvery, call, put } from 'redux-saga/effects';
import { setCard, getCard } from '../../api';
import {
  setProfileCardRequest,
  setProfileCardSuccess,
  getProfileCardRequest,
  getProfileCardSuccess,
  requestError,
} from '../slices/userSlice';

export function* setCardSaga(action) {
  try {
    const data = yield call(setCard, action.payload);
    if (!data.success) {
      yield put(requestError(data.error));
      return;
    }

    const card = action.payload;
    delete card.token;
    yield put(setProfileCardSuccess(card));
    localStorage.profile = JSON.stringify({
      card,
    });
  } catch (error) {
    yield put(requestError(error));
  }
}

export function* getCardSaga(action) {
  try {
    const card = yield call(getCard, action.payload);
    if (!('cardName' in card)) {
      yield put(requestError(card.error));
      return;
    }

    yield put(getProfileCardSuccess(card));
    localStorage.profile = JSON.stringify({
      card,
    });
  } catch (error) {
    yield put(requestError(error));
  }
}

export function* paymentSaga() {
  yield takeEvery(setProfileCardRequest, setCardSaga);
  yield takeEvery(getProfileCardRequest, getCardSaga);
}
