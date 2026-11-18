import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Goals from "./components/Goals";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Navigation bar */}
      <Navbar />
      
      {/* Portfolio Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Goals />
        <Education />
        <Contact />
      </main>
      
      {/* Footer information */}
      <Footer />
    </div>
  );
}