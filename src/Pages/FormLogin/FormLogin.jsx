import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const FormLogin = () => {
  const form = useForm();
  const { register } = form;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const pageHome = () => {
    navigate("/profile");
  };
  const handellSubmit = async e => {
    e.preventDefault();
    console.log(userName, password);
    await axios.post("http://localhost:3001/loginUser", {
      userName: userName,
      password: password,
    });
    setUserName("");
    setPassword("");
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#959D95]">
      <form
        onSubmit={handellSubmit}
        action="#"
        method="POST"
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-gray-700 text-lg font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            {...register("userName")}
            id="userName"
            placeholder="Ent er your username"
            onChange={e => setUserName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-800 placeholder-gray-400 text-gray-800"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="passWord"
            className="block text-gray-700 text-lg font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="passWord"
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-800 placeholder-gray-400 text-gray-800"
          />
        </div>

        <button
          type="submit"
          onClick={pageHome}
          className="w-full bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 rounded-md transition duration-300">
          Login
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
