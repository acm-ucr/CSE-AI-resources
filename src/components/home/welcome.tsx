import React from "react";
import Title from "../title";

const Welcome = () => {
  return (
    <div className="my-10 flex w-5/6 flex-col items-start justify-start rounded-xl p-5 md:w-5/6">
      <Title title="Our Vision" underline={false} />
      <p className="mt-1 text-start text-lg text-black">
        We envision a future where AI education at UCR empowers students and
        faculty to drive innovation, research, and ethical AI development.
        Through collaboration and cutting-edge resources, we bridge AI theory
        and real-world impact.
      </p>
    </div>
  );
};

export default Welcome;
