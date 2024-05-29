import Nyaa from "@/components/nyaa";
import About from "@components/about";
import Comments from "@components/comments";
import Footer from "@components/footer";
import Hero from "@components/hero";
import Network from "@components/network";
import Projects from "@components/projects";
import Stack from "@components/stack";

export const revalidate = 0;

const Home = () => {
  return (
    <div className="relative bg-[#060607] min-h-screen">
      <Nyaa />
      <Hero />
      <About />
      <Stack />
      <Network />
      <Projects />
      <Comments />
      <Footer />
    </div>
  );
};

export default Home;
