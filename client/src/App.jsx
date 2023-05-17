import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const reduxUser = useSelector((state) => state.user);

  useEffect(() => {
    if ("/home" === window.location.pathname && !reduxUser) {
      window.location.pathname = "/";
    }
  }, [reduxUser]);

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
