import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddCars from "../pages/AddCars";
import AllCars from "../pages/AllCars";
import MyCars from "../pages/MyCars";
import CarDetails from "../pages/CarDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Qna from "../pages/Qna";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
          axios.get(
            `https://car-craze-server-omega.vercel.app/cars/${params.id}`
          ),
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
        path: "/qna",
        element: <Qna />,
      },
    ],
  },

  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

export default router;
