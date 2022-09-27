import {getAccountAction, getAccountFailAction, getAccountSuccessAction} from "./actions";

// -------------------------------------------GetAccount

export type GetAccountActionType = ReturnType<typeof getAccountAction>;
export type GetAccountSuccessActionType = ReturnType<typeof getAccountSuccessAction>;
export type GetAccountFailActionType = ReturnType<typeof getAccountFailAction>;

export type AccountActionsType =
  | GetAccountActionType
  | GetAccountSuccessActionType
  | GetAccountFailActionType;

