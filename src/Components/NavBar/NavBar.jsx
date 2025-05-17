import { useState } from "react";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore, MdFavoriteBorder } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { RiTelegram2Line } from "react-icons/ri";
import { LuSquarePlus } from "react-icons/lu";
import { MdPostAdd } from "react-icons/md";
import { Modal } from "@mui/material";
import CustomModal from "../ComponentsMui/Modal";

const NavBar = () => {
  const [isSubDown, setIsSubDown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const dropMenu = () => {
    setIsSubDown(!isSubDown);
  };
  const createPostPopUp = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="bg-black h-[703px] w-[244px] border-r border-white sticky top-0">
      <h1 className="text-white font__fantasy relative top-3 ml-5 p-3 text-3xl">
        Instagram
      </h1>

      <div className="mt-12 ml-3 hover:bg-[#292929] rounded-[7px] p-1 w-[90%] transition duration-800 ease-in-out">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
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
      <div className="relative z-50 mt-12 ml-3 w-[90%]">
        <div
          onClick={dropMenu}
          className="hover:bg-[#292929] rounded-[7px] p-1 transition duration-800 ease-in-out cursor-pointer flex items-center text-white text-2xl">
          <LuSquarePlus className="mr-2" />
          Create
        </div>

        {isSubDown && (
          <div className="absolute top-full left-0 mt-2 bg-[#1f1f1f] rounded-[5px] p-2 shadow-lg w-full z-50 text-white flex items-center justify-between">
            <NavLink
              className="block text-white text-2xl hover:text-gray-300 py-1"
              onClick={createPostPopUp}>
              Post
            </NavLink>
            <div>
              <MdPostAdd className="text-3xl" />
            </div>
          </div>
        )}
      </div>
      {showPopup && (
        <CustomModal showPopup={showPopup} setShowPopup={setShowPopup} />
      )}

      <div className="mt-12 ml-3 hover:bg-[#292929] rounded-[7px] p-1 w-[90%] transition duration-800 ease-in-out relative z-0">
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
  );
};

export default NavBar;
