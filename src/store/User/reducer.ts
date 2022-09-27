import * as userTypes from './constants';
import {UserType} from "../../base/types/provider/base/user";
import {RequestInfoChildType} from "../../base/types/base/Reducer";
import { RequestInfoChildState } from '../../base/typesBaseState';
import {UserActionsType} from "./types";

export type UserState = {
  user: {
    data?: UserType,
  } & RequestInfoChildType;
}

const initialState: UserState = {
	user: {
		...RequestInfoChildState,
	},
};

export const userReducer = (
	state: UserState = initialState,
	action: UserActionsType,
): UserState => {
	switch (action.type) {
			// ----------------------------------------GetUser

		case userTypes.GET_USER_REQUEST: {
			return {
				...state,
				user: {
					...state.user,
					isLoading: true,
				},
			};
		}

		case userTypes.GET_USER_SUCCESS: {
			const { payload } = action;
			return {
				...state,
				user: {
					...state.user,
					data: payload,
					isLoading: false,
					error: undefined,
				},
			};
		}

		case userTypes.GET_USER_FAIL: {
			const { payload } = action;
			return {
				...state,
				user: {
					...state.user,
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
