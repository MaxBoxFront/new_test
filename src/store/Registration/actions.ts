import * as registrationTypes from './constants';
import {PostAuthRegistrationParams} from "../../base/types/provider/base/auth";

export const registrationAction = (payload: PostAuthRegistrationParams) => ({
	type: registrationTypes.REGISTRATION_REQUEST,
	payload,
});

export const registrationSuccessAction = () => ({
	type: registrationTypes.REGISTRATION_SUCCESS,
});

export const registrationFailAction = (payload: { error: string }) => ({
	type: registrationTypes.REGISTRATION_FAIL,
	payload,
});

export default null;
