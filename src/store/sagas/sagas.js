import { fork } from 'redux-saga/effects';
import { registrationSaga } from './registrationSaga';
import { authorizationSaga } from './authorizationSaga';
import { paymentSaga } from './paymentSaga';
import { addressListSaga } from './addressListSaga';
import { routeSaga } from './routeSaga';

export function* Sagas() {
  yield fork(registrationSaga);
  yield fork(authorizationSaga);
  yield fork(paymentSaga);
  yield fork(addressListSaga);
  yield fork(routeSaga);
}
