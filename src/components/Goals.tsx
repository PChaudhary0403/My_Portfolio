import { CheckCircle2, Star, BookOpen, Compass, PlayCircle } from "lucide-react";
import { portfolioData } from "../portfolioData";
import SkillIcon from "./SkillIcon";

export default function Goals() {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Up Next":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "Exploring":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <PlayCircle size={12} className="animate-pulse" />;
      case "Up Next":
        return <BookOpen size={12} />;
      case "Exploring":
        return <Compass size={12} />;
      default:
        return null;
    }
  };

  return (
    <section id="goals" className="py-20 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Career Goals & Aim */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Aspirations</h2>
              <p className="text-3xl font-extrabold mt-3 text-white">Career Goals & Aim</p>
              <div className="w-12 h-1 bg-indigo-500 rounded-full mt-4" />
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-200 flex items-center space-x-2">
                  <Star size={18} className="text-yellow-500" />
                  <span>My Core Vision</span>
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {portfolioData.careerGoals.aim}
                </p>
              </div>

              {/* Objectives List */}
              <div className="space-y-4 pt-6 border-t border-gray-900">
                <h4 className="text-xs font-mono font-bold text-gray-400 tracking-wider uppercase">
                  Key Objectives
                </h4>
                
                <div className="space-y-3.5">
                  {portfolioData.careerGoals.objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="text-indigo-400 mt-0.5 shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-gray-300 text-sm">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Currently Learning */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Growth</h2>
              <p className="text-3xl font-extrabold mt-3 text-white">Currently Learning</p>
              <div className="w-12 h-1 bg-indigo-500 rounded-full mt-4" />
            </div>

            {/* Learning Items Stack */}
            <div className="space-y-4">
              {portfolioData.currentlyLearning.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-xl flex items-start space-x-4 hover:border-gray-800 transition-colors"
                >
                  {/* Topic Icon */}
                  <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-indigo-400 shrink-0">
                    <SkillIcon name={item.iconName} size={20} />
                  </div>

                  {/* Details */}
                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-gray-200">
                        {item.topic}
                      </h3>
                      
                      {/* Status Badge */}
                      <span
                        className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-semibold tracking-wide w-fit ${getStatusStyle(
                          item.status
                        )}`}
                      >
                        {getStatusIcon(item.status)}
                        <span>{item.status}</span>
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
