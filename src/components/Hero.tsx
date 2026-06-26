import { ArrowRight, FileText, ChevronRight, Sparkles } from "lucide-react";
import { portfolioData } from "../portfolioData";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section
      id="home"
      className="relative min-h-screen pt-28 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-pulse-slow z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        {/* Left Column - Copy */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
            <span>Open for Internship & Freelance Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient">
              {portfolioData.name} {portfolioData.lastName}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            {portfolioData.title}
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
            {portfolioData.bio}
          </p>

          {/* Quick Stats Grid for Mobile/Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
            {portfolioData.aboutDetails.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-gray-900/40 border border-gray-800/80 backdrop-blur-sm hover:border-gray-700/50 transition-colors"
              >
                <div className="text-lg sm:text-xl font-bold text-indigo-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => handleScrollTo("projects")}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-600/20 active:scale-98 cursor-pointer group"
            >
              <span>View Projects</span>
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 hover:border-gray-700 font-medium transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>

            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert("Placeholder: Replace this link with your actual resume PDF download.");
              }}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gray-950 hover:bg-gray-900 text-gray-400 hover:text-white border border-dashed border-gray-800 hover:border-indigo-500/40 font-medium transition-all duration-200 cursor-pointer"
            >
              <FileText size={16} className="mr-2" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Column - Visual Code Terminal Mockup */}
        <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0 animate-float z-10">
          <div className="w-full rounded-2xl border border-gray-800 bg-[#0d1117]/90 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-left">
            {/* Terminal Top bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
              </div>
              <span className="text-gray-400 text-xs font-mono">DeveloperInfo.ts</span>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 space-y-2.5 overflow-x-auto text-gray-300">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
              </div>
              <div className="pl-4">
                <span className="text-gray-400">name:</span>{" "}
                <span className="text-green-300">"Pankaj Chaudhary"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">role:</span>{" "}
                <span className="text-green-300">"Software Developer Student"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">focus:</span>{" "}
                <span className="text-green-300">"Full Stack Web & Cloud Architectures"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">location:</span>{" "}
                <span className="text-green-300">"Mumbai,Maharashtra"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">traits:</span>{" "}
                <span className="text-cyan-400">{"["}</span>
                <span className="text-green-300">"Problem Solver"</span>,{" "}
                <span className="text-green-300">"Lifelong Learner"</span>
                <span className="text-cyan-400">{"]"}</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">currentFocus:</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
              </div>
              <div className="pl-8">
                <span className="text-gray-400">framework:</span>{" "}
                <span className="text-green-300">"React / Next.js / Node.js"</span>,
              </div>
              <div className="pl-8">
                <span className="text-gray-400">learning:</span>{" "}
                <span className="text-green-300">"Distributed Systems & Cloud Security"</span>
              </div>
              <div className="pl-4">
                <span className="text-yellow-300">{"}"}</span>
              </div>
              <div>
                <span className="text-yellow-300">{"}"}</span>;
              </div>

              {/* Execution Line */}
              <div className="pt-4 border-t border-gray-800/80 mt-4 flex items-center space-x-2 text-indigo-400">
                <ChevronRight size={16} />
                <span className="text-gray-400">developer.</span>
                <span className="text-blue-300">sayHello</span>
                <span className="text-gray-400">()</span>
              </div>
              <div className="text-green-400 font-semibold pl-6">
                &gt; "Hello! Let's build something amazing together."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
