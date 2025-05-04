import { GoHome } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { RiTelegram2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";

const NavBar = () => {
  const location = useLocation();

  const isHomeActive =
    location.pathname === "/" || /^\/[a-zA-Z0-9]+$/.test(location.pathname);

  return (
    <>
      <div className="bg-[#000000] h-[703px] w-[244px] border-r-1 border-white">
        <h1 className="text-white font__fantasy relative top-3 ml-5 p-3 text-3xl">
          Instagram
        </h1>

        <div className="mt-12 ml-3 hover:bg-[#292929] rounded-[7px] p-1 w-[90%] transition duration-800 ease-in-out">
          <NavLink
            to="/"
            className={
              isHomeActive
                ? "text-white text-2xl font-bold flex items-center"
                : "text-white text-2xl flex items-center"
            }>
            <GoHome className="mr-2" />
            Home
          </NavLink>
        </div>

        <div className="mt-12 ml-3 hover:bg-[#292929] rounded-[7px] p-1 w-[90%] transition duration-800 ease-in-out">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "text-white text-2xl font-bold flex items-center"
                : "text-white text-2xl flex items-center"
            }>
            <IoIosSearch className="mr-2" />
            Search
          </NavLink>
        </div>

        <div className="mt-12 ml-3 hover:bg-[#292929] rounded-[7px] p-1 w-[90%] transition duration-800 ease-in-out">
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "text-white text-2xl font-bold flex items-center"
                : "text-white text-2xl flex items-center"
            }>
            <MdOutlineExplore className="mr-2" />
            Explore
          </NavLink>
        </div>

        <div className="mt-12 ml-3 hover:bg-[#292929] rounded-[7px] p-1 w-[90%] transition duration-800 ease-in-out">
          <NavLink
            to="/reals"
            className={({ isActive }) =>
              isActive
                ? "text-white text-2xl font-bold flex items-center"
                : "text-white text-2xl flex items-center"
            }>
            <RxVideo className="mr-2" />
            Reals
          </NavLink>
        </div>

        <div className="mt-12 ml-3 hover:bg-[#292929] rounded-[7px] p-1 w-[90%] transition duration-800 ease-in-out">
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive
                ? "text-white text-2xl font-bold flex items-center"
                : "text-white text-2xl flex items-center"
            }>
            <RiTelegram2Line className="mr-2" />
            Messages
          </NavLink>
        </div>

        <div className="mt-12 ml-3 hover:bg-[#292929] rounded-[7px] p-1 w-[90%] transition duration-800 ease-in-out">
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive
                ? "text-white text-2xl font-bold flex items-center"
                : "text-white text-2xl flex items-center"
            }>
            <MdFavoriteBorder className="mr-2" />
            Favorite
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
