import { useRoutes } from 'react-router-dom';
import { Landing, About, Review } from '../pages'

export const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: 'reviews',
      element: <Review />
    }
  ]);
};
