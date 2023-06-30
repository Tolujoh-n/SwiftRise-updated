import { useRoutes } from 'react-router-dom';
import { Landing, Bounty, About, Review, Login, Signup } from '../pages'

export const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/',
      element: <Bounty />,
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
