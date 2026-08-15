import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
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
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
