import { Route, Routes } from "react-router-dom";
import Profile from "../Profile";
import EditProfile from "../ProflleBio/EditProfile/EditProfile";
import NotFoundPage from "../../NotFoundPage/NotFoundPage";

const ProfileRouter = () => {
  return (
    <Routes>
      <Route path="/profile/:userName" element={<Profile />} />
      <Route path="/profile/edit" element={<EditProfile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default ProfileRouter;
