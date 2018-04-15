import App from './containers/App';
import Counter from './containers/Counter';
// import IntroPage from './containers/IntroPage';
// import BlogPage from './containers/BlogPage';
// import LoginPage from './containers/LoginPage';
// import NotFoundPage from './containers/NotFoundPage';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Counter,
      },
    ],
  },
];

export default routes;
