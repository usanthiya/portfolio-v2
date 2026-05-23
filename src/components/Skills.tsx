import { Laptop } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../assets/data/skills";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].title);
  const currentCategory = skillCategories.find((cat) => cat.title === activeTab) ?? skillCategories[0];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight inline-flex items-center gap-3">
            <Laptop className="text-primary-500" size={28} />
            <span>
              Skills <span className="text-primary-500">Abilities</span>
            </span>
          </h2>
          <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === cat.title
                  ? "text-primary-600 dark:text-primary-400 font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
              }`}
            >
              {cat.title}
              {activeTab === cat.title && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {currentCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 p-6 flex flex-col items-center justify-center gap-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary-200 dark:hover:border-primary-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="w-16 h-16 rounded-xl bg-slate-50 dark:bg-slate-950 p-3 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className={`w-full h-full object-contain ${skill.isDarkInvert ? "dark:filter dark:invert dark:brightness-200" : ""}`}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(skill.name)}&background=7c3aed&color=fff&size=48&bold=true`;
                    }}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
