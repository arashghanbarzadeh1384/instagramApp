import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 " />
        </div>
        <h1 className="text-7xl font-extrabold text-yellow-400 drop-shadow-md tracking-tight animate-pulse">
          404
        </h1>
        <p className="text-3xl font-semibold">Oops! Page Not Found</p>
        <p className="text-gray-400 max-w-md mx-auto text-lg">
          The page you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 shadow-lg">
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
