import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-text-main overflow-x-hidden select-none">
      {/* Cinematic Film-Grain Noise Overlay */}
      <div className="noise-overlay" />

      {/* Global Glassmorphic Nav */}
      <Navbar />

      {/* Main Structural Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
