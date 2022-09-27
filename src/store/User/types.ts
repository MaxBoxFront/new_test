import {getUserAction, getUserFailAction, getUserSuccessAction} from "./actions";

// -------------------------------------------GetUser


export type GetUserActionType = ReturnType<typeof getUserAction>;
export type GetUserSuccessActionType = ReturnType<typeof getUserSuccessAction>;
export type GetUserFailActionType = ReturnType<typeof getUserFailAction>;

export type UserActionsType =
  | GetUserActionType
  | GetUserSuccessActionType
  | GetUserFailActionType;

