import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="my-48 text-center">
      <h1 className="mb-4 text-7xl">404</h1>
      <div className="mx-auto mb-4 w-64 flex-grow border-2 border-ucr-yellow"></div>
      <div className="mb-16 text-2xl">Page Not Found</div>

      <Link
        href="/"
        className="mx-auto mt-11 w-96 rounded-full border-4 border-ucr-yellow bg-ucr-yellow px-16 py-6 text-3xl"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
