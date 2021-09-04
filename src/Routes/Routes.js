import { v4 as uuidv4 } from 'uuid';
import Home from '../Pages/Home/Home.jsx';
import Login from '../Components/Login/Login';
import NotFound from '../Pages/NotFound/NotFound.jsx';
export const publicRoutes = [
  {
    id: uuidv4(),
    path: '/',
    component: <Home />,
  },
  {
    id: uuidv4(),
    path: '/login',
    component: <Login />,
  },
  {
    id: uuidv4(),
    path: '*',
    component: <NotFound />,
  },
];
