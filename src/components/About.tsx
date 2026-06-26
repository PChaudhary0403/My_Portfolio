import { User, Mail, MapPin, GraduationCap } from "lucide-react";
import { portfolioData } from "../portfolioData";

export default function About() {
  const infoItems = [
    { icon: <User size={18} />, label: "Name", value: `${portfolioData.name} ${portfolioData.lastName}` },
    { icon: <Mail size={18} />, label: "Email", value: portfolioData.contact.email, isLink: true, href: `mailto:${portfolioData.contact.email}` },
    { icon: <GraduationCap size={18} />, label: "Education", value: portfolioData.education[0].institution },
    { icon: <MapPin size={18} />, label: "Location", value: portfolioData.contact.location },
  ];

  return (
    <section id="about" className="py-20 bg-[#070b19]/40 relative border-t border-gray-900/50">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">About Me</h2>
          <p className="text-3xl sm:text-4xl font-extrabold mt-3 text-white">My Journey & Background</p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar Area */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 blur-md group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              
              {/* Main container */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-[#0d1117] p-3 shadow-2xl">
                <img
                  src={portfolioData.aboutDetails.avatarUrl}
                  alt={`${portfolioData.name}'s Avatar`}
                  className="w-full max-w-[280px] h-[280px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
                <div className="mt-4 text-center">
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block">
                    {portfolioData.title}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {portfolioData.contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio and Info Area */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-gray-100">
              Passionate about building software that makes a difference.
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              {portfolioData.aboutDetails.story}
            </p>

            <p className="text-gray-400 leading-relaxed">
              As a student, I actively seek out challenging projects that push me to learn outside my comfort zone. I enjoy developing high-performance algorithms, exploring systems programing, and implementing elegant frontend interfaces.
            </p>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-800/80">
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="p-2 rounded-lg bg-gray-900 border border-gray-800/60 text-indigo-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-mono">{item.label}</span>
                    {item.isLink ? (
                      <a
                        href={item.href}
                        className="text-gray-200 hover:text-indigo-400 transition-colors font-medium break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-200 font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote / Highlight */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border-l-4 border-indigo-500/80 text-gray-300 text-sm italic">
              "Great developers are not born; they are compiled one project at a time."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
