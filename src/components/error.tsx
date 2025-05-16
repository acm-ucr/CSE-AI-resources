import Fault from "@/utils/error";

const Error = ({ code, name, message }: Fault) => {
  return (
    <div className="fixed flex h-screen w-screen flex-col items-center justify-center">
      <p className="m-0 text-center text-6xl font-extrabold text-ucr-blue">
        {code}
      </p>
      <p className="m-0 text-center text-lg font-bold text-ucr-blue md:text-2xl">
        {name}
      </p>
      <p className="m-0 text-center text-sm text-ucr-yellow md:text-lg">
        {message}
      </p>
    </div>
  );
};

export default Error;
