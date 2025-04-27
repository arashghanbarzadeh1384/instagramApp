import axios from "axios";
import { createContext, useState } from "react";
import SinginForm from "../../Components/Form/SinginForm";
export const MyContext = createContext();
const Singin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handellSubmit = async e => {
    e.preventDefault();
    console.log(userName, password);
    await axios.post("http://localhost:3001/loginUser", {
      userName: userName,
      password: password,
      email: email,
    });
    setUserName("");
    setPassword("");
  };
  return (
    <>
      <MyContext.Provider
        value={{
          userName,
          setUserName,
          password,
          setPassword,
          email,
          setEmail,
          handellSubmit,
        }}>
        <SinginForm />
      </MyContext.Provider>
    </>
  );
};

export default Singin;
