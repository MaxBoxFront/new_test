import {
	all,
	fork,
} from 'redux-saga/effects';
import {usersWatcher} from "./Users/sagas";
import {registrationWatcher} from "./Registration/sagas";
import {userWatcher} from "./User/sagas";
import {authWatcher} from "./Auth/sagas";
import {accountWatcher} from "./Account/sagas";


export function* baseSagaRoot() {
	try {
		yield all([
     fork(accountWatcher),
     fork(userWatcher),
     fork(usersWatcher),
     fork(authWatcher),
     fork(registrationWatcher)
		]);
	} finally {
		// always runs
	}
}
