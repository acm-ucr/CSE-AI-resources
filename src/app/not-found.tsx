import React from "react"
import Link from "next/link";

const NotFound = () => {
  return(
        <div className="my-48 text-center">
          <h1 className= "text-7xl mb-4">404</h1>
          <div className="w-64 mb-4 mx-auto flex-grow border-2 border-ucr-yellow"></div>
          <div className="text-2xl mb-16">Page Not Found</div>

          <Link href="/" className="w-96 mx-auto border-4 border-ucr-yellow bg-ucr-yellow text-3xl py-6 px-16 mt-11 rounded-full">
            Back To Home
          </Link>



        </div>
  );
};

export default NotFound;
