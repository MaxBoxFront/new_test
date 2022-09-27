import * as accountTypes from './constants';
import {UserType} from "base/types/provider/base/user";
import {RequestInfoChildType} from "base/types/base/Reducer";
import { RequestInfoChildState } from 'base/typesBaseState';
import {AccountActionsType} from "./types";

export type AccountState = {
  account: {
    data?: UserType,
  } & RequestInfoChildType;
}

const initialState: AccountState = {
	account: {
		...RequestInfoChildState,
	},
};

export const accountReducer = (
	state: AccountState = initialState,
	action: AccountActionsType,
): AccountState => {
	switch (action.type) {
			// ----------------------------------------GetAccount

		case accountTypes.GET_ACCOUNT_REQUEST: {
			console.log('GET_ACCOUNT_REQUEST')
			return {
				...state,
				account: {
					...state.account,
					isLoading: true,
				},
			};
		}

		case accountTypes.GET_ACCOUNT_SUCCESS: {
			const { payload } = action;
			console.log('GET_ACCOUNT_SUCCESS payload = ', payload)
			return {
				...state,
				account: {
					...state.account,
					data: payload,
					isLoading: false,
					error: undefined,
				},
			};
		}

		case accountTypes.GET_ACCOUNT_FAIL: {
			const { payload } = action;
			return {
				...state,
				account: {
					...state.account,
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
