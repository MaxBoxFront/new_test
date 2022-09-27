import {
	call,
	select, delay,
} from 'redux-saga/effects';
import ApiProvider from './index';
import { BaseState } from '../base/types';

export function* handlerResponse({
	response,
	parameters,
	Api,
	method,
	numberOfReq = 0,
}: {
	response: any,
	parameters: any,
	Api: any,
	method: any
	numberOfReq?: number
}): any {
		try {
		if (response.status === 403) {
			const { auth } = yield select(({ base }: BaseState) => base.auth);
			if (!auth) return response;
			yield delay(3000);
			return yield call([
				Api,
				method,
			], parameters);
		}

		if (response.status === 504 && numberOfReq < 3) {
			response = yield call([
				Api,
				method,
			], parameters);
			return yield call(handlerResponse, {
				response,
				parameters,
				Api,
				method,
				numberOfReq: numberOfReq + 1,
			});
		}

		return response;
	} catch (e) {
		console.log(e);
		return null;
	}
}

export const getApiRequestSaga = <T extends BaseState>(Api: any) => function* apiRequestSagaDefault(
	apiMethod: string,
	options?: any,
): any {
	const parameters = { ...options };
	const method = Api[apiMethod];
	if (method && (method.security || method.securityIsOptional)) {
		const {
			auth,
		} = yield select(({
			base,
		}: T) => base.auth);
		if (!parameters.headers) {
			parameters.headers = {};
		}
		if (auth?.token) {
			parameters.headers.Authorization = `Bearer ${auth.token}`;
		}
	}
	try {
		const response = yield call([
			Api,
			method,
		], parameters);
		return yield call(handlerResponse, {
			response,
			parameters,
			Api,
			method,
		});
	} catch (e) {
		console.log(e);
		return null;
	} finally {
	}
};

export const apiRequest = getApiRequestSaga<BaseState>(ApiProvider);
