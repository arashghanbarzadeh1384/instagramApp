import { useState } from "react";
import axios from "axios";
import EditProfile from "./EditProfile";

const CreateBio = () => {
  const [imageProfile, setImageProfile] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");

  const handleProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/userProfile", {
        imageProfile: imageProfile,
        website: website,
        bio: bio    
      });
      setImageProfile("");
      setWebsite("");
      setBio("");
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  };

  return (
    <EditProfile
      bio={bio}
      setBio={setBio}
      imageProfile={imageProfile}
      setImageProfile={setImageProfile}
      website={website}
      setWebsite={setWebsite}
      handleProfile={handleProfile}
    />
  );
};

export default CreateBio;