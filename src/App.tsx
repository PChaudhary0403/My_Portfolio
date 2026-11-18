import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Goals from "./components/Goals";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

function PortfolioContent() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Navigation bar */}
      <Navbar />

      {/* Floating Theme Toggle Button */}
      <ThemeToggle />

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

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}