import React from 'react';
import {Route} from 'react-router-dom';
import {MainModuleLayout} from "mainModule/layouts/MainModuleLayout";
import mainModuleRoutes from "base/constants/routes/mainModuleRoutes";
import {Home} from "mainModule/pages/Home/Home";
import {User} from "mainModule/pages/User/User";

export const getMainModuleRouters = () => (
	<>
		<Route
			path={mainModuleRoutes.root}
			element={(
				<MainModuleLayout>
					<Home />
				</MainModuleLayout>
			)}
		/>
		<Route
			path={mainModuleRoutes.user.rootParam}
			element={(
				<MainModuleLayout>
					<User />
				</MainModuleLayout>
			)}
		/>
	</>
);
