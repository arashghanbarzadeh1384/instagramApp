import React, { useEffect, useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // گرفتن یوزرنیم از localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName); // ذخیره یوزرنیم در state
    }
  }, []);

  return (
    <div className="w-[100%] h-[100vh] bg-black ">
      <div className="text-white text-3xl">
        <h1>{userName ? userName : "Guest"}</h1>
      </div>
    </div>
  );
};

export default Home;
