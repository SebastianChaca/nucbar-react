import { v4 as uuidv4 } from 'uuid';
import Home from '../Pages/Home/Home.jsx';
import Login from '../Components/Login/Login';
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
];
