import { Mail, MapPin, Calendar, FileText, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const details = [
    { icon: <Mail size={18} className="text-primary-500" />, label: 'Email', value: 'santhiyaudhya1@gmail.com', href: 'mailto:santhiyaudhya1@gmail.com' },
    { icon: <MapPin size={18} className="text-primary-500" />, label: 'Location', value: 'Chidambaram, India - 608001' },
    { icon: <Calendar size={18} className="text-primary-500" />, label: 'Role', value: 'Full Stack Web Developer' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight inline-flex items-center gap-3">
            <User className="text-primary-500" size={28} />
            <span>About <span className="text-primary-500">Me</span></span>
          </h2>
          <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Profile Avatar Box */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-1.5 bg-gradient-to-tr from-primary-500 to-violet-500 shadow-xl overflow-hidden"
            >
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                
                {/* Visual Avatar */}
                <div className="flex justify-between items-start">
                  <div className="bg-primary-500/10 text-primary-500 dark:bg-primary-500/20 p-3 rounded-2xl">
                    <User size={24} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
                    Available for Hire
                  </span>
                </div>

                <div className="my-6">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">Santhiya U</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Full Stack Developer</p>
                </div>

                {/* Micro Stats panel inside avatar box */}
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div>
                    <span className="block text-xl font-bold text-primary-600 dark:text-primary-400">2+</span>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">Years Experience</span>
                  </div>
                  <div>
                    <span className="block text-xl font-bold text-primary-600 dark:text-primary-400">10+</span>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">Skills Mastered</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Description & Bio Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              I'm Santhiya
            </h3>
            <span className="px-3.5 py-1 rounded-lg text-xs font-bold bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-400">
              Full Stack Developer
            </span>

            <p className="text-slate-600 dark:text-slate-355 text-base leading-relaxed">
              Passionate Full Stack Developer with a strong foundation in building scalable web applications from conception to deployment. Proficient in languages like JavaScript, Python with hands-on experience in frameworks like ReactJS, NodeJS, ExpressJS. Skilled in database management using MongoDB, API Integration, and creating responsive, user-friendly interfaces. Committed to staying updated with the latest technologies and delivering high-quality solutions to meet business objectives.
            </p>

            {/* Quick Details Box Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
              {details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 shadow-sm"
                >
                  <div className="bg-primary-50 dark:bg-primary-950/40 p-2.5 rounded-xl flex items-center justify-center">
                    {detail.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors truncate block"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate block">
                        {detail.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="mt-4">
              <a
                href="https://drive.google.com/file/d/1tSWttRY6bXN0poS0vR9RBaWFee7KaHrz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-violet-600 hover:from-primary-700 hover:to-violet-700 text-white px-6 py-3.5 rounded-xl font-semibold shadow-md shadow-primary-600/10 hover:translate-y-[-2px] transition-all duration-200"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
