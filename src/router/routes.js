import { Navigate } from 'react-router-dom';
import Auth from '../pages/Auth';
import Main from '../pages/Main';

export const privateRoutes = [
  {
    path: '/order',
    element: <Main />,
  },
  {
    path: '/profile',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Navigate to='/order' />,
  },
  {
    path: '/registration',
    element: <Navigate to='/profile' />,
  },
];

export const publicRoutes = [
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/registration',
    element: <Auth />,
  },
  {
    path: '/*',
    element: <Navigate to='/login' />,
  },
];
