import {registrationAction, registrationFailAction, registrationSuccessAction} from "./actions";

export type RegistrationActionType = ReturnType<typeof registrationAction>;
export type RegistrationSuccessActionType = ReturnType<typeof registrationSuccessAction>;
export type RegistrationFailActionType = ReturnType<typeof registrationFailAction>;

export type RegistrationActionsType =
  RegistrationActionType
  | RegistrationSuccessActionType
  | RegistrationFailActionType
