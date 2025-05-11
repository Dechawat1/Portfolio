import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from "@/components/nav/Navbar";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
