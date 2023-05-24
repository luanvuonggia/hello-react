import {Routes, Route} from "react-router-dom";
import Home from "containers/Home";
import About from "containers/About";
import Login from "containers/Login";
import NotFoundPage from "containers/404Page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  )
}

export default App;
