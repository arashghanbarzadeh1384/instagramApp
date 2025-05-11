import axios from "axios";
import { useState } from "react";

const EditProfile = () => {
  const [imageProfile, setImageProfile] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");

  const handleProfile = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/userProfile", {
        imageProfile: imageProfile,
        website: website,
        bio: bio,
      });
      setImageProfile("");
      setWebsite("");
      setBio("");
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  };
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-black text-white">
        <h1 className="text-5xl ml-[12%] pt-10 ">Edit profile</h1>
        <form
          onSubmit={handleProfile}
          action="#"
          className="w-[80%] max-w-3xl mx-auto mt-10 space-y-20">
          <div>
            <label
              htmlFor="Image Url"
              className="block mb-2 text-lg font-medium">
              Image Url
            </label>
            <input
              value={imageProfile}
              onChange={e => setImageProfile(e.target.value)}
              type="text"
              className="w-full bg-zinc-800 text-white p-3 rounded-lg border border-zinc-700"
            />
          </div>
          <div>
            <label
              htmlFor="Image Url"
              className="block mb-2 text-lg font-medium">
              Website
            </label>
            <input
              type="text"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              className="w-full bg-zinc-800 text-white p-3 rounded-lg border border-zinc-700"
            />
          </div>
          <div>
            <label
              htmlFor="Image Url"
              className="block mb-2 text-lg font-medium">
              Bio
            </label>
            <textarea
              type="text"
              value={bio}
              onChange={e => setBio(e.target.value)}
              className="w-full bg-zinc-800 text-white p-3 rounded-lg border border-zinc-700"
              maxLength={500}
            />
          </div>
          <div className="flex flex-row-reverse relative bottom-4 w-full">
            <button
              className="bg-[#002d4a] p-2 font-bold text-2xl rounded-[5px] w-[200px] cursor-pointer"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
