import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="mb-4 text-7xl font-bold text-gray-900">404</div>
      <div className="mb-4 h-1 w-40 bg-ucr-yellow"></div>
      <p className="mb-8 text-2xl text-gray-700">Page Not Found</p>

      <Link
        href="/"
        className="rounded-full border-4 border-ucr-yellow bg-ucr-yellow px-6 py-3 text-xl font-semibold text-gray-900 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
