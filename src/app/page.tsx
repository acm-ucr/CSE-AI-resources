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
      <News
        title="TITLE"
        pageLink="/"
        imageLink="https://www.magnite.com/wp-content/uploads/2024/05/surface-xSiQBSq-I0M-unsplash.jpg"
        imageAlt="alt test"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};

export default Home;
