import { useRoutes } from 'react-router-dom';
import { Landing, About } from '../pages'

export const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/about',
      element: <About />
    }
  ]);
};
