import * as authTypes from './constants';
import {PostAuthLoginData, PostAuthLoginParams} from "../../base/types/provider/base/auth";

export const authLogoutAction = () => ({
	type: authTypes.AUTH_LOGOUT,
});

//--------------------------------------PostAuthLogin

export const authLoginAction = (payload: PostAuthLoginParams) => ({
	type: authTypes.AUTH_LOGIN_REQUEST,
	payload,
});

export const authLoginSuccessAction = (payload: PostAuthLoginData) => ({
	type: authTypes.AUTH_LOGIN_SUCCESS,
	payload,
});

export const authLoginFailAction = (payload: { error: string }) => ({
	type: authTypes.AUTH_LOGIN_FAIL,
	payload,
});

export default null;
