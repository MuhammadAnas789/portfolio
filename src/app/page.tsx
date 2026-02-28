import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 text-center text-[#94a3b8] text-sm border-t border-[#334155]/30">
        <p>
          Designed & built by{" "}
          <span className="text-[#2dd4bf]">Muhammad Anas</span>
        </p>
      </footer>
    </>
  );
}
