import { useRoutes } from 'react-router-dom';
import { Landing, About, Review, Login, Signup } from '../pages'

export const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'reviews',
      element: <Review />
    },
    {
      path: 'log-in',
      element: <Login />
    },
    {
      path: 'sign-up',
      element: <Signup />
    }
  ]);
};
