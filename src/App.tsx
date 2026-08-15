import { MotionConfig } from "framer-motion";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Reliability from "./components/Reliability";
import WorkflowDemo from "./components/WorkflowDemo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useCardSpotlight from "./hooks/useCardSpotlight";

export default function App() {
  useCardSpotlight();

  return (
    // `reducedMotion="user"` makes every framer-motion animation honour the
    // OS setting. The CSS media query in index.css cannot do this on its own,
    // because framer-motion animates via JS transforms, not CSS transitions.
    <MotionConfig reducedMotion="user">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Experience />
        <Skills />
        <Reliability />
        <WorkflowDemo />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
