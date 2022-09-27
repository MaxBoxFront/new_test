import * as authTypes from './constants'
import {call, put, takeLatest} from "redux-saga/effects";
import {authLoginFailAction, authLoginSuccessAction} from "./actions";
import { PostAuthLoginResp } from '../../base/types/provider/base/auth';
import {AuthLoginActionType} from "./types";
import { apiRequest } from '../../providers/sagas';

export function* authLoginSaga({payload}: AuthLoginActionType) {
  try {
    const {
      email, password,
    } = payload;
    const resp: PostAuthLoginResp = yield call(
      apiRequest,
      'postAuthLogin',
      {
        body: {
          email, password,
        },
      },
    );
    if (!resp.success) throw new Error(resp.error || 'Unknown error');

    yield put(authLoginSuccessAction({
      token: resp.data.token,
    }));
  } catch (e: any) {
    yield put(authLoginFailAction({
      error: e.message,
    }));
  }
}

export function* authLogout() {
  try {
    const resp: PostAuthLoginResp = yield call(
      apiRequest,
      'postAuthLogout');
    }
   catch (e: any) {
     console.log(e.message)
  }
}


export function* authWatcher() {
  yield takeLatest(
    authTypes.AUTH_LOGIN_REQUEST, authLoginSaga,
  )
  yield takeLatest(authTypes.AUTH_LOGOUT, authLogout);
}