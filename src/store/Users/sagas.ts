import { call, put, takeLeading } from 'redux-saga/effects';
import * as usersTypes from './constants'

import { apiRequest } from '../../providers/sagas';
import {getUsersFailAction, getUsersSuccessAction} from "./actions";
import {GetUsersResp} from "../../base/types/provider/base/users";

function* getUsersSaga() {
	// try {
	// 	const resp: GetUsersResp = yield call(
	// 		apiRequest, 'getUsers'
	// 	);
	// 	if (!resp.success) {
	// 		throw new Error(resp.error || 'Unknown error');
	// 	}
	// 	yield put(getUsersSuccessAction(resp.data));
	// } catch (err: any) {
	// 	yield put(getUsersFailAction({ error: err.message }));
	// }
	try {
		const resp: GetUsersResp = yield call(
			apiRequest, 'getUsers'
		);
		if (!resp.success) {
			throw new Error(resp.error || 'Unknown error');
		}
		yield put(getUsersSuccessAction(resp.data));
	} catch (err: any) {
		yield put(getUsersFailAction({ error: err.message }));
	}
}

export function* usersWatcher() {
	yield takeLeading(usersTypes.GET_USERS_REQUEST, getUsersSaga);
}
