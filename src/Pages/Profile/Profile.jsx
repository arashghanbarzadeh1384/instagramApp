  import { useNavigate, useParams } from "react-router";
  import withUserStats from "./ProflleBio/Hoc/withUserStats ";

  const Profile = ({ postNumber, followersNumber, followingNumber }) => {
    const { userName } = useParams();
    const navigate = useNavigate()
    const editProfilePage = () => {
      navigate("/profile/edit")
    }
    return (
      <div className="w-full h-screen bg-black text-white">
        <div className="px-[27.5%] relative top-6 flex">
          <div className="relative top-10 right-10">
            <img
              className="rounded-[40%] w-32 h-32 object-cover"
              src="https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75"
              alt={`${userName}'s profile`}
            />
          </div>
          <div className="mt-10 ml-10 w-[100%]">
            <div className="flex gap-4    ">
            <h1 className="text-3xl font-bold">{userName.toLowerCase()}</h1>
            <button onClick={editProfilePage} className="bg-[#393534] p-2 font-bold cursor-pointer rounded-[8px] hover:bg-[#282626]">Edit profile</button>
            </div>
            <div className="flex gap-6 mt-4">
            <span><strong>{postNumber}</strong> posts</span>
              <span><strong>{followersNumber}</strong> followers</span>
              <span><strong>{followingNumber}</strong> following</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default withUserStats(Profile);
