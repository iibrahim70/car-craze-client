import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Signin from "../pages/register/Signin";
import Signup from "../pages/register/Signup";
import AllToys from "../pages/alltoys/AllToys";
import MyToys from "../pages/mytoys/MyToys";
import AddToys from "../pages/addtoys/AddToys";
import Blogs from "../pages/blogs/Blogs";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/alltoys',
        element: <AllToys/>
      },
      {
        path: '/mytoys',
        element: <MyToys/>
      },
      {
        path: '/addtoys',
        element: <AddToys/>
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/signin',
        element: <Signin/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  }
])

export default router; 