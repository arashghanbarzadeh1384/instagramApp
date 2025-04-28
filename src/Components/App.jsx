import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import NavBar from "./NavBar/NavBar";
import Singin from "../Pages/FormLogin/Singin";
import Login from "../Pages/FormLogin/Login";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarWithLocation />
      <Routes>
        <Route path="/singin" element={<Singin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const NavBarWithLocation = () => {
  const location = useLocation();

  if (location.pathname === "/singin") {
    return null;
  } else if (location.pathname === "/login") {
    return null;  
  }

  return <NavBar />;
};

export default App;
