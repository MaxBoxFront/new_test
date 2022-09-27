import * as usersTypes from './constants';

export const getUsersAction = () => ({
	type: usersTypes.GET_USERS_REQUEST,
});

export const getUsersSuccessAction = (payload: any) => ({
	type: usersTypes.GET_USERS_SUCCESS,
	payload,
});

export const getUsersFailAction = (payload: { error: string }) => ({
	type: usersTypes.GET_USERS_FAIL,
	payload,
});

export default null;
