import {
  authLoginFailAction,
  authLoginAction,
  authLoginSuccessAction,
  authLogoutAction,
  // authRefreshTokenSuccessAction,
  // authRefreshTokenFailAction,
  // authRefreshTokenReqAction,
} from "./actions";

export type AuthLogoutActionType = ReturnType<typeof authLogoutAction>;

//--------------------------------------AuthLogin

export type AuthLoginActionType = ReturnType<typeof authLoginAction>;
export type AuthLoginSuccessActionType = ReturnType<typeof authLoginSuccessAction>;
export type AuthLoginFailActionType = ReturnType<typeof authLoginFailAction>;


export type AuthActionsType = AuthLoginActionType
  | AuthLoginSuccessActionType
  | AuthLoginFailActionType
  | AuthLogoutActionType

