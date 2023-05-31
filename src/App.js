import React, { useState } from "react";
import Home from "containers/Home";
import About from "containers/About";
import Login from "containers/Login";
import NotFoundPage from "containers/404Page";
import { AntLayout, PrimaryLayout } from "components/Layout";
import { useRoutes } from "react-router-dom";
function App() {
  let element = useRoutes([
    { path: "login", element: <Login /> },
    { path: "", element: <AntLayout><Home /></AntLayout> },
    { path: "users", element: <AntLayout><About /></AntLayout> },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return element;
}
export default App;
