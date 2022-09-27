import { RequestInfoChildType } from '../../base/types/base/Reducer';
import * as usersTypes from './constants';
import {RequestInfoChildState} from "../../base/typesBaseState";
import {UsersActionsType} from "./types";

export type UsersState = {
  users: {
    data: Array<any>;
  } & RequestInfoChildType;
};

const initialState: UsersState = {
	users: {
		data: [],
		...RequestInfoChildState,
	},
};

export const usersReducer = (
	state: UsersState = initialState,
	action: UsersActionsType,
): UsersState => {
	switch (action.type) {
		case usersTypes.GET_USERS_REQUEST: {
			return {
				...state,
				users: {
					...state.users,
					data: state.users.data,
					isLoading: true,
				},
			};
		}

		case usersTypes.GET_USERS_SUCCESS: {
			const { payload } = action;
			console.log('BASE_GET_POSTS_SUCCESS =', payload);
			return {
				...state,
				users: {
					...state.users,
					data: [...state.users.data, ...payload.data],
					isLoading: false,
				},
			};
		}

		case usersTypes.GET_USERS_FAIL: {
			const { payload } = action;
			return {
				...state,
				users: {
					...state.users,
					isLoading: false,
					error: payload.error,
				},
			};
		}

		default: {
			return state;
		}
	}
};
