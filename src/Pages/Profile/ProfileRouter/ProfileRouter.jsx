import { Route, Routes } from "react-router-dom";
import Profile from "../Profile";
import NotFoundPage from "../../NotFoundPage/NotFoundPage";
import EditProfile from "../ProflleBio/EditProfile";
const ProfileRouter = () => {
  return (
    <Routes>
      <Route path="/profile/:userName" element={<Profile />} />
      <Route path="/profile/edit/:userName" element={<EditProfile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default ProfileRouter;
