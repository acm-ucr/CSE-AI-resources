import About from "@/components/home/about";
import Education from "@/components/home/education";
import Landing from "@/components/home/landing";
import News from "@/components/home/news";
import Welcome from "@/components/home/welcome";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Landing />
      <Welcome />
      <About />
      <Education />
      <News />
    </div>
  );
};

export default Home;
