import About from "@/components/about";
import Education from "@/components/education";
import Landing from "@/components/landing";
import News from "@/components/news";
import Welcome from "@/components/welcome";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Landing />
      <Welcome />
      <About />
      <Education />
      <News />
    </div>
  );
};

export default Home;
