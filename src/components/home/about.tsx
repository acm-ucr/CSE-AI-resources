import Title from "../title";

const About = () => {
  return (
    <div className="font-inter my-5 flex w-5/6 flex-col rounded-xl p-5">
      <Title title="Our Misson" underline />
      <p className="mx-auto mt-2 w-full pr-2 text-lg">
        Our mission is to make AI education accessible, engaging, and
        interdisciplinary. Through comprehensive coursework, hands-on projects,
        and mentorship, we prepare students to navigate the evolving landscape
        of AI research and development.
      </p>
    </div>
  );
};

export default About;
