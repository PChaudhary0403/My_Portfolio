import { portfolioData } from "../portfolioData";
import SkillIcon from "./SkillIcon";

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">My Toolkit</h2>
          <p className="text-3xl sm:text-4xl font-extrabold mt-3 text-white">Skills & Technologies</p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((category, catIdx) => (
            <div
              key={catIdx}
              className="glass-panel p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl"
            >
              <h3 className="text-lg font-bold text-gray-100 mb-6 border-b border-gray-800 pb-3 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-xs font-mono text-indigo-400 font-normal">
                  {category.skills.length} Items
                </span>
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    {/* Skill Info */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2.5 text-gray-300">
                        <div className="p-1 rounded-md bg-gray-900 border border-gray-800 text-indigo-400">
                          <SkillIcon name={skill.iconName} size={15} />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-950 rounded-full overflow-hidden border border-gray-900">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 font-mono mb-4">Other Libraries & Ecosystems I enjoy working with:</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {["Redux Toolkit", "Prisma", "Socket.io", "Vite", "GraphQL", "Framer Motion", "Jest", "TypeScript", "Eslint", "PostgreSQL", "TailwindCSS", "Next.js"].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-gray-900/60 border border-gray-800/80 hover:border-indigo-500/20 text-gray-400 hover:text-indigo-300 text-xs font-mono transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
