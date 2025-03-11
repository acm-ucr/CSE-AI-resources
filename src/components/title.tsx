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
          <div className="whitespace-nowrap text-3xl md:text-5xl">{title}</div>
          <div className="flex-grow border-2 border-ucr-yellow" />
        </div>
      ) : (
        <div className="mb-3 w-fit border-b-[4px] border-ucr-yellow pb-2 text-3xl text-black md:text-5xl">
          {title}
        </div>
      )}
    </>
  );
};

export default Title;
