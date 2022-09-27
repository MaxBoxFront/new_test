import { combineReducers } from 'redux';
import {baseRootReducer} from "../../store/rootReducer";

export default () => combineReducers({
	base: baseRootReducer,
});
