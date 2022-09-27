import {getUsersAction, getUsersFailAction, getUsersSuccessAction} from "./actions";


export type GetUsersActionType = ReturnType<typeof getUsersAction>;
export type GetUsersSuccessActionType = ReturnType<typeof getUsersSuccessAction>;
export type GetUsersFailActionType = ReturnType<typeof getUsersFailAction>;

export type UsersActionsType =
  | GetUsersActionType
  | GetUsersSuccessActionType
  | GetUsersFailActionType;
