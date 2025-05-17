import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalUnstyled from "../Components/ComponentsMui/Modal";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className="w-[100%] h-[100vh] bg-black">
      <div className="text-white text-[18px] flex flex-row-reverse mr-[10%] relative top-[5%]">
        <Link to={`/profile/${userName}`}>
          {userName.toLowerCase() ? userName.toLowerCase() : "Guest"}
        </Link>
      </div>
      <ModalUnstyled />
    </div>
  );
};

export default Home;
