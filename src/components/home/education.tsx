import Title from "../title";

const Education = () => {
  return (
    <div className="flex w-5/6 flex-col px-0 md:w-5/6 md:px-0">
      <Title title="Our Values" underline />
      <p className="mt-2 text-base leading-relaxed md:text-lg">
        At the core of our initiative lies a commitment to innovation,
        inclusivity, and integrity. We believe in fostering a community where
        collaboration and curiosity drive meaningful advancements in AI. By
        upholding ethical principles, encouraging diverse perspectives, and
        promoting lifelong learning, we empower students and faculty to shape
        the future of AI responsibly. Our values ensure that AI education at UCR
        remains accessible, impactful, and forward-thinking, bridging the gap
        between cutting-edge research and real-world applications.
      </p>
    </div>
  );
};

export default Education;
