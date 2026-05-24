import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { educationData } from '../assets/data/education';
 
export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight inline-flex items-center gap-3">
            <GraduationCap className="text-primary-500" size={28} />
            <span>My <span className="text-primary-500">Education</span></span>
          </h2>
          <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          <p className="italic text-slate-500 dark:text-slate-400 mt-6 max-w-lg mx-auto text-sm">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 flex flex-col gap-12">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-primary-500 flex items-center justify-center shadow-sm">
                <BookOpen size={12} className="text-primary-500" />
              </div>

              {/* Detail Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-200/60 dark:border-slate-800/60 hover:border-primary-300 dark:hover:border-primary-800/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40 px-3 py-1 rounded-full w-fit">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 w-fit">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2 leading-snug">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                  {item.institution}
                </p>
                {/* <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
