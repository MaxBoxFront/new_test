import * as userTypes from './constants';
import {UserType} from "../../base/types/provider/base/user";

// ------------------------------------- GetChannel

export const getUserAction = (payload: any) => ({
	type: userTypes.GET_USER_REQUEST,
	payload,
});

export const getUserSuccessAction = (payload: UserType) => ({
	type: userTypes.GET_USER_SUCCESS,
	payload,
});

export const getUserFailAction = (payload: { error: string }) => ({
	type: userTypes.GET_USER_FAIL,
	payload,
});

export default null;
