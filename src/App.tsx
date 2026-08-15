import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Reliability from "./components/Reliability";
import WorkflowDemo from "./components/WorkflowDemo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Reliability />
        <WorkflowDemo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
