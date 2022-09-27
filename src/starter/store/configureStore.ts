import {
	createStore,
	applyMiddleware,
	compose,
} from 'redux';
import type{ Dispatch } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

export type ReduxState = any;
export type ReduxActions = any;
export type ReduxDispatch = Dispatch<ReduxActions>;

export default function configureStore(
	initialState: ReduxState,
) {
	// @ts-ignore
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;

	const sagaMiddleware = createSagaMiddleware();

	const middlewares = [
		sagaMiddleware,
	];

	const enhancers = [
		applyMiddleware(...middlewares),
	];
	const composedEnhancers = composeEnhancers(...enhancers);

	// @ts-ignore
 const store = createStore<ReduxState, ReduxActions, ReduxDispatch>(
		createRootReducer(),
		initialState,
		composedEnhancers,
	);

	sagaMiddleware.run(rootSaga);

	return {
		store	};
}
