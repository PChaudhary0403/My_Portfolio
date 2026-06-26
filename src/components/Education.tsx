import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { portfolioData } from "../portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#070b19]/40 relative border-t border-gray-900/50">
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-purple-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">My Journey</h2>
          <p className="text-3xl sm:text-4xl font-extrabold mt-3 text-white">Academic History</p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative border-l border-gray-800 ml-4 sm:ml-6 md:ml-auto">
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="mb-12 relative pl-8 sm:pl-10 text-left group">
              {/* Timeline dot */}
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-gray-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-indigo-500/20">
                <GraduationCap size={12} />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 font-semibold tracking-wide">
                      {edu.degree}
                    </span>
                    <h3 className="text-xl font-bold text-gray-100 mt-2">
                      {edu.major}
                    </h3>
                    <p className="text-gray-400 font-medium text-sm">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Period & GPA */}
                  <div className="sm:text-right shrink-0 space-y-2">
                    <div className="flex items-center sm:justify-end text-xs sm:text-sm text-gray-500 font-mono">
                      <Calendar size={14} className="mr-1.5" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500 font-mono mr-1">GPA:</span>
                      <span className="text-emerald-400 font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/5 border border-emerald-500/20">
                        {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Coursework Badges */}
                <div className="space-y-3 pt-4 border-t border-gray-900">
                  <h4 className="text-xs font-mono font-bold text-gray-400 tracking-wider uppercase flex items-center space-x-1.5">
                    <BookOpen size={14} className="text-indigo-400" />
                    <span>Key Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg bg-gray-950/60 border border-gray-900 text-xs text-gray-300 hover:border-gray-800 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements List */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-gray-900">
                    <h4 className="text-xs font-mono font-bold text-gray-400 tracking-wider uppercase flex items-center space-x-1.5">
                      <Award size={14} className="text-yellow-500" />
                      <span>Achievements & Extracurriculars</span>
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <span className="text-indigo-400 mr-2 font-mono">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
