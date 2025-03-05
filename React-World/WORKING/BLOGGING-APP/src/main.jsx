import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Screens/Home/home.jsx'
import Login from './Screens/Login/login.jsx'
import Signup from './Screens/Signup/signup.jsx'
import Profile from './Screens/Profile/profile.jsx'
import ProtectRoutes from './ProtectRoutes.jsx'
import Dashboard from './Screens/Dashboared/dashboared.jsx'
import SoloBlog from './Screens/Soloblog/solo.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/profile",
        element: <ProtectRoutes component={<Profile />} />
      },
      {
        path: "/dashboared",
        element: <ProtectRoutes component={<Dashboard />} />
      },
      {
        path:'/solo',
        element:<SoloBlog/>
      }
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)