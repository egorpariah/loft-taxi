import { takeEvery, call, put } from 'redux-saga/effects';
import { getRoute } from '../../api';
import {
  getRouteRequest,
  getRouteSuccess,
  requestError,
} from '../slices/orderSlice';

export function* fetchRoute(action) {
  try {
    const route = yield call(getRoute, action.payload);
    if (!Array.isArray(route) || route.length === 0) {
      yield put(requestError(route));
      return;
    }

    yield put(getRouteSuccess(route));
  } catch (error) {
    yield put(requestError(error));
  }
}

export function* routeSaga() {
  yield takeEvery(getRouteRequest, fetchRoute);
}
