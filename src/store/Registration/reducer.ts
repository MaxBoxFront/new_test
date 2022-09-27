import {RequestInfoChildType} from "../../base/types/base/Reducer";
import {RequestInfoChildState} from "../../base/typesBaseState";
import {RegistrationActionsType} from "./types";
import * as registrationTypes from './constants';


export type RegistrationState = {
  register: {
		isRegister?: boolean,
		email?: string,
  } & RequestInfoChildType;
};

const initialState: RegistrationState = {
	register: {
		isRegister: false,
		...RequestInfoChildState,
	},
};

export const registrationReducer = (
	state: RegistrationState = initialState,
	action: RegistrationActionsType,
): RegistrationState => {
	switch (action.type) {
		case registrationTypes.REGISTRATION_REQUEST: {
			const { payload } = action;
			return {
				...state,
				register: {
					...state.register,
					email: payload.email,
					isLoading: true,
				},
			};
		}

		case registrationTypes.REGISTRATION_SUCCESS: {
			return {
				...state,
				register: {
					...state.register,
					isRegister: true,
					isLoading: false,
				},
			};
		}

		case registrationTypes.REGISTRATION_FAIL: {
			const { payload } = action;
			return {
				...state,
				register: {
					...state.register,
					isRegister: false,
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
