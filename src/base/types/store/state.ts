import {UsersState} from "store/Users/reducer";
import {UserState} from "store/User/reducer";
import {RegistrationState} from "store/Registration/reducer";
import {AuthState} from "store/Auth/reducer";
import {AccountState} from "store/Account/reducer";

export type BaseState = {
	base: {
		registration: RegistrationState,
		auth: AuthState,
		account: AccountState,
		user: UserState,
		users: UsersState,
	}
}
