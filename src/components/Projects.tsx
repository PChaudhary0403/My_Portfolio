import { useState } from "react";
import { ExternalLink, Code } from "lucide-react";
import { Github } from "./SocialIcons";
import { portfolioData } from "../portfolioData";
import type { ProjectItem } from "../portfolioData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full Stack", "Frontend", "Systems"];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="py-20 bg-[#070b19]/40 relative border-t border-gray-900/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">My Work</h2>
          <p className="text-3xl sm:text-4xl font-extrabold mt-3 text-white">Academic & Personal Projects</p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 border cursor-pointer focus:outline-none ${
                activeCategory === category
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/10"
                  : "bg-gray-900/40 text-gray-400 border-gray-800 hover:border-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <article
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-1.5 transition-all duration-300 shadow-xl group"
            >
              {/* Card Header visual representation */}
              <div className="relative h-48 bg-[#090d16] border-b border-gray-900 flex items-center justify-center p-6 overflow-hidden">
                {/* Visual design inside card header instead of static images */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/10 rounded-full blur-xl group-hover:bg-indigo-600/20 transition-all duration-300" />
                
                {/* Tech logo representation */}
                <div className="w-16 h-16 rounded-2xl bg-gray-950/80 border border-gray-800 flex items-center justify-center text-indigo-400 shadow-lg group-hover:scale-105 transition-transform duration-300 z-10">
                  <Code size={30} />
                </div>

                {/* Category tag */}
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-gray-950/90 border border-gray-800 text-[10px] font-mono text-indigo-400">
                  {project.category}
                </span>

                {project.featured && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/30 text-[10px] font-mono text-yellow-300 font-semibold uppercase">
                    Featured
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-100 group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech and Links */}
                <div className="mt-6 space-y-4">
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-gray-950 border border-gray-900 text-[11px] font-mono text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-900 pt-4 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-mono text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={14} className="mr-1.5" />
                      <span>Repository</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} className="ml-1.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
