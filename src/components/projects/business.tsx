import React from "react";
import Title from "../title";

const Business = () => {
  return (
    <div className="flex w-11/12 flex-col">
      <Title title={"Business"} underline />
      <p className="font-inter text-2xl font-normal leading-relaxed">
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
