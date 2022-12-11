import { takeEvery, call, put } from 'redux-saga/effects';
import { getAddressList } from '../../api';
import {
  getAddressListSuccess,
  getAddressListRequest,
  requestError,
} from '../slices/orderSlice';

export function* fetchAddresses() {
  try {
    const data = yield call(getAddressList);
    if (!('addresses' in data)) {
      yield put(requestError(data));
      return;
    }

    const list = data.addresses;
    yield put(getAddressListSuccess(list));
  } catch (error) {
    yield put(requestError(error));
  }
}

export function* addressListSaga() {
  yield takeEvery(getAddressListRequest, fetchAddresses);
}
