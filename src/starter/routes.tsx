import React from 'react';
import {
	Route, Routes,
} from 'react-router-dom';

import {getMainModuleRouters} from "mainModule/routes";
import {ErrorPage} from "base/pages/ErrorPage/ErrorPage";
import {useSelector} from "react-redux";
import {BaseState} from "base/types";
import {getAuthRouters} from "authModule/routes";

export const BaseRouter = () => {
	const {base: {auth}} = useSelector((state: BaseState) => state);

	return (
		<Routes>
			{auth.auth && getMainModuleRouters()}
			{!auth.auth && getAuthRouters()}

			<Route
				path="*"
				element={<ErrorPage />}
			/>
		</Routes>
	);
};

export default null;
