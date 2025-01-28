import About from "@/components/home/about";
import Education from "@/components/home/education";
import Landing from "@/components/home/landing";
import News from "@/components/home/news";
import Welcome from "@/components/home/welcome";
import Professional from "@/components/projects/professionals";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Landing />
      <Welcome />
      <About />
      <Education />
      <News />
      <Professional />
    </div>
  );
};

export default Home;
