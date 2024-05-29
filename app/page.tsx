import About from "@/components/about";
import Comments from "@/components/comments";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative bg-[#17161b] min-h-screen">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Comments />
      <Footer />
    </div>
  );
};

export default Home;
