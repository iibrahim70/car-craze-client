import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import Blogs from "../pages/blogs/Blogs";
import ErrorPage from "../pages/errorpage/ErrorPage";
import CarDetails from "../pages/cardetails/CarDetails";
import PrivateRoute from "./PrivateRoute";
import AllCars from "../pages/allcars/AllCars";
import AddCars from "../pages/addcars/AddCars";
import MyCars from "../pages/mycars/MyCars";
import Signin from "../pages/signin/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allcars",
        element: <AllCars />,
      },
      {
        path: "/car-details/:id",
        element: <CarDetails />,
        loader: ({ params }) =>
          fetch(`https://car-craze-server-omega.vercel.app/cars/${params.id}`),
      },
      {
        path: "/mycars",
        element: (
          <PrivateRoute>
            <MyCars />
          </PrivateRoute>
        ),
      },
      {
        path: "/addcars",
        element: (
          <PrivateRoute>
            <AddCars />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },

  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

export default router;
