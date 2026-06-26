import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { portfolioData } from "../portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Goals & Learning", id: "goals" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle nav shadow/opacity
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ["home", ...navLinks.map((link) => link.id)];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/85 backdrop-blur-md border-b border-gray-800/60 shadow-lg shadow-black/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 group-hover:border-indigo-500/40 group-hover:bg-indigo-600/20 transition-all duration-300">
              <Terminal size={20} className="group-hover:rotate-6 transition-transform" />
            </div>
            <span className="font-mono text-lg font-bold text-gray-100 group-hover:text-white transition-colors">
              {portfolioData.name.toLowerCase()}
              <span className="text-indigo-400">.dev()</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-all duration-200 hover:text-indigo-400 cursor-pointer relative py-1 focus:outline-none ${
                    activeSection === link.id
                      ? "text-indigo-400 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full animate-fade-in" />
                  )}
                </button>
              ))}
            </div>

            {/* Socials / Action */}
            <div className="flex items-center space-x-4 border-l border-gray-800 pl-6">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <button
                onClick={() => handleNavClick("contact")}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all duration-200 border border-indigo-400/20 active:scale-95 cursor-pointer shadow-md shadow-indigo-600/10"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-[#030712]/95 border-b border-gray-800/80 backdrop-blur-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                activeSection === link.id
                  ? "bg-indigo-600/10 text-indigo-400 border-l-2 border-indigo-500 pl-2.5"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/30"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-800 flex items-center justify-between px-3">
            <div className="flex space-x-4">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#0077b5] p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <button
              onClick={() => handleNavClick("contact")}
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
