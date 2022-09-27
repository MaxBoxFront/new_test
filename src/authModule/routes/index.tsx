import React from 'react';
import {
	Route,
} from 'react-router-dom';
import authRoutes from "base/constants/routes/authModuleRoutes";
import {Registration} from "authModule/Auth/Registration";
import {Login} from "authModule/Auth/Login";
import {AuthModuleLayout} from "authModule/layouts/AuthModuleLayout";


export const getAuthRouters = () => (
	<>
		<Route
			path={authRoutes.root}
			element={(
				<AuthModuleLayout>
					<Registration />
					</AuthModuleLayout>
			)}
		/>
		<Route
			path={authRoutes.registration.root}
			element={(
				<AuthModuleLayout>
					<Registration />
					</AuthModuleLayout>
			)}
		/>
		<Route
			path={authRoutes.authorization.root}
			element={(
				<AuthModuleLayout>
					<Login />
				</AuthModuleLayout>
			)}
		/>
	</>
);
