import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import NavBar from "./NavBar/NavBar";
import FormLogin from "../Pages/FormLogin/FormLogin";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarWithLocation />
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const NavBarWithLocation = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return <NavBar />;
};

export default App;
