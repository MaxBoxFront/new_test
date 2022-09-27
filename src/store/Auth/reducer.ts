import * as authTypes from './constants'
import {RequestInfoChildType} from "../../base/types/base/Reducer";
import {RequestInfoChildState} from "../../base/typesBaseState";
import {AuthActionsType} from "./types";


export type AuthState = {
  auth?: {
    token: string,
  },
  email?: string,
  loginReq: RequestInfoChildType,
}

const initialState: AuthState = {
  email: '',
  loginReq: RequestInfoChildState,
};

export const authReducer = (state = initialState, action: AuthActionsType): AuthState => {
  switch (action.type) {
    case authTypes.AUTH_LOGIN_REQUEST: {
      const {payload} = action;
      return {
        ...state,
        email: payload.email,
        loginReq: {
          ...state.loginReq,
          isLoading: true,
        },
      };
    }

    case authTypes.AUTH_LOGIN_SUCCESS: {
      const {payload} = action;
      return {
        ...state,
        auth: {
          token: payload.token,
        },
        loginReq: {
          ...state.loginReq,
          isLoading: false,
        },
      };
    }

    case authTypes.AUTH_LOGIN_FAIL: {
      const {payload} = action;
      return {
        ...state,
        loginReq: {
          ...state.loginReq,
          error: payload.error,
          isLoading: false,
        },
      };
    }

      // --------------------------------------Logout

    case authTypes.AUTH_LOGOUT: {
      console.log('Logout')
      return initialState;
    }

    default: {
      return state;
    }
  }
}