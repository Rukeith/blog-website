import App from './containers/App';
import IntroPage from './containers/IntroPage';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './containers/NotFoundPage';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/intro',
        exact: true,
        component: IntroPage,
      },
      {
        path: '/login',
        exact: true,
        component: LoginPage,
      },
      {
        path: '*',
        component: NotFoundPage,
      },
    ],
  },
];

export default routes;
