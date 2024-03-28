import React from "react";
import Home from "./Home";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Main = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Main;
