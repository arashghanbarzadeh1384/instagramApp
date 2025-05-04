import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Profile from "./Profile/Profile";

const Home = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/loginUser/${id}`);
      setUser(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (id) getUser();
  }, [id]);

  return (
    <div className="w-[100%] h-[100vh] bg-black text-white p-4">
      {user.userName ? <Profile user={user} /> : null}
    </div>
  );
};

export default Home;
