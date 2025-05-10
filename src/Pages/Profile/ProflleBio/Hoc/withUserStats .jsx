import { useEffect, useState } from "react";
import axios from "axios";

const withUserStats = WrappedComponent => {
  return props => {
    const [postNumber, setPostNumber] = useState(0);
    const [followersNumber, setFollowersNumber] = useState(0);
    const [followingNumber, setFollowingNumber] = useState(0);

    useEffect(() => {
      const fetchUserStats = async () => {
        try {
          const response = await axios.get("http://localhost:3001/userStatus");
          const userStats = response.data?.[0];

          if (userStats) {
            setPostNumber(userStats.postNumber);
            setFollowersNumber(userStats.followersNumber);
            setFollowingNumber(userStats.followingNumber);
          }
        } catch (error) {
          console.error("Error fetching user stats:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserStats();
    }, []);

    return (
      <WrappedComponent
        {...props}
        postNumber={postNumber}
        followersNumber={followersNumber}
        followingNumber={followingNumber}
      />
    );
  };
};

export default withUserStats;
