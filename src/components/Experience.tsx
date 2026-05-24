import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData } from '../assets/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight inline-flex items-center gap-3">
            <Briefcase className="text-primary-500" size={28} />
            <span>Work <span className="text-primary-500">Experience</span></span>
          </h2>
          <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Experience List */}
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="relative p-1 rounded-3xl bg-gradient-to-tr from-primary-500 to-violet-500 shadow-xl overflow-hidden"
            >
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[22px] p-6 sm:p-10 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05]" />

                {/* Header Information */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-6 mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-primary-600 dark:text-primary-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-3 py-1 rounded-full border border-slate-200/40 dark:border-slate-800/40">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-400">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="relative z-10 flex flex-col gap-4">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3.5 text-sm sm:text-base">
                      <div className="mt-1 flex-shrink-0 text-primary-500 dark:text-primary-400">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-slate-600 dark:text-slate-355 leading-relaxed">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
