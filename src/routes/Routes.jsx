import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Signin from "../pages/register/Signin";
import Signup from "../pages/register/Signup";
import AllToys from "../pages/alltoys/AllToys";
import MyToys from "../pages/mytoys/MyToys";
import AddToys from "../pages/addtoys/AddToys";
import Blogs from "../pages/blogs/Blogs";
import ErrorPage from "../pages/errorpage/ErrorPage";
import ToyDetails from "../pages/toydetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/allcars',
        element: <AllToys/>,
      },
      {
        path: '/toydetails/:id',
        element: <ToyDetails/>,
        loader: ({ params }) => fetch(`https://car-craze-server-omega.vercel.app/toys/${params.id}`)
      },
      {
        path: '/mycars',
        element: <PrivateRoute><MyToys /></PrivateRoute>
      },
      {
        path: '/addcars',
        element: <PrivateRoute><AddToys /></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs/>
      }
    ]
  },
  
  {path: '/signin', element: <Signin />},
  {path: '/signup', element: <Signup />}
])

export default router; 