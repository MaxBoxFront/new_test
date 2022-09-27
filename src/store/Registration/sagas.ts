import { call, put, takeLeading } from 'redux-saga/effects';
import * as registrationTypes from './constants';
import {registrationFailAction, registrationSuccessAction} from "./actions";
import {PostAuthRegistrationResp} from "../../base/types/provider/base/auth";
import {RegistrationActionType} from "./types";
import {apiRequest} from "../../providers/sagas";

function* registrationSaga({ payload }: RegistrationActionType) {
	try {
		const {
			username, email, password,
		} = payload;

		const resp: PostAuthRegistrationResp = yield call(
			apiRequest,
			'postAuthRegistration',
			{
				body: {
					username,
					email,
					password,
				},
			},
		);

		if (!resp.success || resp.error) {
			throw new Error(resp.error || 'Unknown error');
		}
		yield put(registrationSuccessAction());
	} catch (err: any) {
		yield put(registrationFailAction({ error: err.message }));
	}
}


export function* registrationWatcher() {
	yield takeLeading(registrationTypes.REGISTRATION_REQUEST, registrationSaga);
}
