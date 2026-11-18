import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin, Twitter } from "./SocialIcons";
import { portfolioData } from "../portfolioData";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#03050a] border-t border-gray-200 dark:border-gray-900/60 py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <span className="font-mono text-base font-bold text-gray-900 dark:text-gray-200">
              {portfolioData.name.toLowerCase()}
              <span className="text-indigo-600 dark:text-indigo-400">.dev()</span>
            </span>
            <p className="text-xs text-gray-500 mt-1.5">
              Designing and coding clean developer portfolios.
            </p>
          </div>

          {/* Center: Social links */}
          <div className="flex items-center space-x-5">
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/40 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700/60 shadow-sm dark:shadow-none transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/40 text-gray-500 hover:text-[#0077b5] dark:text-gray-400 dark:hover:text-[#0077b5] hover:border-gray-300 dark:hover:border-gray-700/60 shadow-sm dark:shadow-none transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            {portfolioData.contact.twitter && (
              <a
                href={portfolioData.contact.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/40 text-gray-500 hover:text-[#1da1f2] hover:border-gray-300 dark:hover:border-gray-700/60 shadow-sm dark:shadow-none transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            )}
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="p-2 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/40 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 hover:border-gray-300 dark:hover:border-gray-700/60 shadow-sm dark:shadow-none transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Right: Back to top */}
          <div>
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white dark:bg-gray-900/40 hover:bg-gray-100 dark:hover:bg-gray-800/60 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 text-xs font-mono text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white shadow-sm dark:shadow-none transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-900/40 my-8" />

        {/* Bottom copyright info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            © {currentYear} {portfolioData.name} {portfolioData.lastName}. All rights reserved.
          </div>
          <div>
            Built with React, TypeScript & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
