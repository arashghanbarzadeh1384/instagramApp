import { useEffect, useState } from "react";
import axios from "axios";

const withUserStats = WrappedComponent => {
  return props => {
    const [postNumber, setPostNumber] = useState(0);
    const [followersNumber, setFollowersNumber] = useState(0);
    const [followingNumber, setFollowingNumber] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchUserStats = async () => {
        try {
          const response = await axios.get("http://localhost:3001/userStatus");
          const userStats = response.data?.[0]; // فقط این خط تغییر کرده

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

    if (loading) return <div className="text-white">در حال بارگذاری...</div>;

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
