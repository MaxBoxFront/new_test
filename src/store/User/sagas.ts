import {
	call, put, takeLeading,
} from 'redux-saga/effects';

import {GetUserActionType} from "./types";
import {getUserFailAction, getUserSuccessAction} from "./actions";
import {GetUserResp} from "../../base/types/provider/base/user";
import * as userTypes from './constants';
import {apiRequest} from "../../providers/sagas";



// ----------------------------------------GetUser

function* getUserSaga({ payload } : GetUserActionType) {
	try {
		const resp: GetUserResp = yield call(
			apiRequest,
			'getUser',
			{ params: { userId: payload } },
		);
		if (!resp.success || resp.error) {
			throw new Error(resp.error || 'Unknown error');
		}
		yield put(getUserSuccessAction(resp.data.data));
	} catch (err) {
		// @ts-ignore
		yield put(getUserFailAction({ error: err.message }));
	}
}

export function* userWatcher() {
	yield takeLeading(userTypes.GET_USER_REQUEST, getUserSaga);
}
