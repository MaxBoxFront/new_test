import modulesRoutes from 'base/constants/routesModules';

const getAuthRoutes = (baseURL: string): any => {
  const url = baseURL !== '' ? `${baseURL}` : '/';
  return {
    root: `${url}`,
    title: 'Main',
    authorization: {
      root: `${url}authorization`,
      title: 'Authorization',
    },
    registration: {
      root: `${url}registration`,
      title: 'Registration',
    },
  };
};

const authRoutes: any = getAuthRoutes(modulesRoutes.root);

export default authRoutes;
