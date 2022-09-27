import * as accountTypes from './constants';
import {UserType} from "base/types/provider/base/user";

// ------------------------------------- GetAccount

export const getAccountAction = (payload: any) => ({
	type: accountTypes.GET_ACCOUNT_REQUEST,
	payload,
});

export const getAccountSuccessAction = (payload: UserType) => ({
	type: accountTypes.GET_ACCOUNT_SUCCESS,
	payload,
});

export const getAccountFailAction = (payload: { error: string }) => ({
	type: accountTypes.GET_ACCOUNT_FAIL,
	payload,
});

export default null;
