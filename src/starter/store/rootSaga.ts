import { fork, all } from 'redux-saga/effects';

import { baseSagaRoot } from '../../store/rootSaga';


export default function* rootSaga() {
	try {
		yield all([
			fork(baseSagaRoot),
		]);
	} finally {
		// always runs
	}
}
