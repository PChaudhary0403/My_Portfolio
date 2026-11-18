import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-6 right-6 z-[9999] p-3.5 rounded-full shadow-2xl cursor-pointer
        bg-white text-amber-500 border border-gray-200 shadow-gray-400/50
        hover:bg-gray-50 hover:border-amber-400 hover:scale-110
        dark:bg-gray-900 dark:text-indigo-400 dark:border-gray-700 dark:shadow-black/60
        dark:hover:bg-gray-800 dark:hover:border-indigo-400 dark:hover:scale-110
        backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-95 group"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun
          size={22}
          className={`absolute transition-all duration-500 transform ${
            isDark
              ? "rotate-90 scale-0 opacity-0 text-amber-400"
              : "rotate-0 scale-100 opacity-100 text-amber-500 group-hover:rotate-45"
          }`}
        />
        <Moon
          size={22}
          className={`absolute transition-all duration-500 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-indigo-400 group-hover:-rotate-12"
              : "-rotate-90 scale-0 opacity-0 text-indigo-400"
          }`}
        />
      </div>
    </button>
  );
}
