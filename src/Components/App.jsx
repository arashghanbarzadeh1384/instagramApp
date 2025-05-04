import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import NavBar from "./NavBar/NavBar";
import Singin from "../Pages/FormLogin/Singin";
import Login from "../Pages/FormLogin/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <NavBarWithLocation />
        <div className="w-[100%] ">
          <Routes>
            <Route path="/singin" element={<Singin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

const NavBarWithLocation = () => {
  const location = useLocation();

  if (location.pathname === "/singin" || location.pathname === "/login") {
    return null;
  }

  return <NavBar />;
};

export default App;
