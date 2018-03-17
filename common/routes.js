import App from './containers/App';
import IntroPage from './containers/IntroPage';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/intro',
        exact: true,
        component: IntroPage,
      },
    ],
  },
];

export default routes;
