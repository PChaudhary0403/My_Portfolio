import React from "react";
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
  const [darkMode, setDarkMode] = React.useState(true);
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-100 flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Navigation bar */}
      <Navbar />
      <button onClick={toggleTheme} className="ml-4 px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-500 transition">Toggle Theme</button>

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
