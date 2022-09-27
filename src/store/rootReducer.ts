import {Reducer} from 'react';

import {combineReducers} from 'redux';
import { usersReducer } from './Users/reducer';
import {userReducer} from "./User/reducer";
import {registrationReducer} from "./Registration/reducer";
import {authReducer} from "./Auth/reducer";
import {accountReducer} from "./Account/reducer";

// @ts-ignore
export const baseRootReducer: Reducer<BaseState, BaseActionsType> = combineReducers({
  user: userReducer,
  users: usersReducer,
  auth: authReducer,
  account: accountReducer,
  registration: registrationReducer,
});
