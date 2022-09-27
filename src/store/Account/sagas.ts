import {
	call, put, takeLeading,
} from 'redux-saga/effects';

import {GetUserResp} from "../../base/types/provider/base/user";
import * as accountTypes from './constants';
import {apiRequest} from "../../providers/sagas";
import {GetAccountActionType} from "./types";
import {getAccountFailAction, getAccountSuccessAction} from "./actions";



// ----------------------------------------GetAccount

function* getAccountSaga({ payload } : GetAccountActionType) {
	console.log('getAccountSaga')
	try {
		const resp: GetUserResp = yield call(
			apiRequest,
			'getUser',
			{ params: { userId: payload } },
		);
		if (!resp.success || resp.error) {
			throw new Error(resp.error || 'Unknown error');
		}
		yield put(getAccountSuccessAction(resp.data.data));
		console.log('getAccountSuccessAction = ', resp.data.data)
	} catch (err) {
		// @ts-ignore
		yield put(getAccountFailAction({ error: err.message }));
	}
}

export function* accountWatcher() {
	yield takeLeading(accountTypes.GET_ACCOUNT_REQUEST, getAccountSaga);
}
