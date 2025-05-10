import { Link } from "react-router-dom";

const LoginForm = ({ formData, handleSubmit, handleOnChange }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#959D95]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-gray-700 text-lg font-semibold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleOnChange}
            placeholder="Enter your username"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-800 placeholder-gray-400 text-gray-800"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="passWord"
            className="block text-gray-700 text-lg font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="passWord"
            name="password"
            value={formData.password}
            onChange={handleOnChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-800 placeholder-gray-400 text-gray-800"
          />
        </div>

        <h1 className="relative bottom-5">Have an account? {<Link to="/singin" className=" text-blue-800 font-bold text-[18px] ">Singin</Link>}</h1>

        <button
          type="submit"
          className="w-full bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 rounded-md transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
