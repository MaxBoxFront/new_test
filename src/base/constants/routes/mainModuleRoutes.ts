import modulesRoutes from "../routesModules";

const getMainModuleRoutes = (baseURL: string) => {
	const url = baseURL !== '' ? `${baseURL}/` : '/';
	return ({
		root: `${url}`,
		title: '',
		home: {
			root: `${url}`,
			title: 'Main',
		},
		user: {
			root: `${url}user`,
			rootParam: `${url}user/:userId`,
			title: 'User',
		},
	});
};

const mainModuleRoutes = getMainModuleRoutes(modulesRoutes['main-module'].root);

export default mainModuleRoutes;
