import { createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "../components/ProtectedRoute";


import Home from "./Home";
import Locations from "./Locations";
import Favorites from "./Favorites";
import Login from "./Login";



export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/favorites",
    element: (
      <ProtectedRoute user={{ test: true }}>
        <Favorites />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
