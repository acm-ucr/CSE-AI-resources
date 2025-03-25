"use client";
import Error from "@/components/error";

type props = {
  error: {
    code: number;
    error: string;
    name: string;
    message: string;
    dev: string;
  };
};

const InternalError = ({ error: { code, name, message } }: props) => {
  return <Error code={code} name={name} message={message} />;
};

export default InternalError;
