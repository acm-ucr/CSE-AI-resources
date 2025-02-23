import React from "react";

const Title = ({
  title,
  underline = false,
}: {
  title: string;
  underline: boolean;
}) => {
  return (
    <>
      {underline ? (
        <div className="flex w-full items-center gap-4 md:gap-6">
          <h1 className="whitespace-nowrap text-4xl md:text-6xl">{title}</h1>
          <div className="flex-grow border-2 border-ucr-yellow" />
        </div>
      ) : (
        <h1 className="mb-3 border-b-[4px] border-ucr-yellow pb-2 text-6xl text-black">
          {title}
        </h1>
      )}
    </>
  );
};

export default Title;
