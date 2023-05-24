import Home from "containers/Home";
import About from "containers/About";
import Login from "containers/Login";
import NotFoundPage from "containers/404Page";
import { useRoutes } from "react-router-dom";
function App() {
  let element = useRoutes([
    { path: "/", element: <Home />,},
    { path: "about", element: <About /> },
    { path: "login", element: <Login /> },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return element;
}
export default App;
