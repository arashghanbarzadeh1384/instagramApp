import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  

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
      <div className="text-white text-3xl">
        <Link to={`/profile/${userName}`}>
          {userName ? userName : "Guest"}
        </Link>
      </div>
    </div>
  );
};

export default Home;
