import App from './containers/App';
import IntroPage from './containers/IntroPage';
import NotFoundPage from './components/NotFoundPage';

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
        path: '*',
        component: NotFoundPage,
      },
    ],
  },
];

export default routes;
