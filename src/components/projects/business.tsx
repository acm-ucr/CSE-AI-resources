import React from "react";
import Title from "../title";

const Business = () => {
  return (
    <div className="mx-auto flex w-11/12 flex-col">
      <Title title={"Business"} underline />
      <p className="font-inter text-base font-normal leading-relaxed md:text-lg lg:text-2xl">
        AI is revolutionizing the way businesses operate, from data-driven
        decision-making to automation and customer insights. Our research
        explores how AI can optimize financial strategies, marketing analytics,
        and operational efficiency, equipping professionals with the tools to
        navigate an evolving digital economy.
      </p>
    </div>
  );
};

export default Business;
