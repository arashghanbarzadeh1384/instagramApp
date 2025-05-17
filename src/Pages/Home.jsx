import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeReviewCard from "../Components/ComponentsMui/Post";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className="w-[100%]   bg-black">
      <div className="text-white text-[18px] flex flex-row-reverse mr-[10%] relative top-12">
        <Link to={`/profile/${userName}`}>
          {userName.toLowerCase() ? userName.toLowerCase() : "Guest"}
        </Link>
      </div>
      <RecipeReviewCard userName={userName} />
    </div>
  );
};

export default Home;
