import { useState, useEffect } from 'react';
import { Linkedin, Github, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = ['Frontend development', 'Backend development', 'Web development'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          timer = setTimeout(handleType, typingSpeed);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          timer = setTimeout(handleType, typingSpeed);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 px-6"
    >
      {/* Background Orbs */}
      <div className="glow-orb w-[300px] h-[300px] bg-primary-400 dark:bg-primary-900 left-[10%] top-[20%] animate-pulse-slow" />
      <div className="glow-orb w-[400px] h-[400px] bg-violet-400 dark:bg-violet-900 right-[15%] bottom-[15%] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Info Column */}
        <div className="md:col-span-7 flex flex-col items-start gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary-100 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 border border-primary-200/50 dark:border-primary-800/30">
              Welcome to my space
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Hi There,<br /> I'm <span className="bg-gradient-to-r from-primary-600 to-violet-600 dark:from-primary-400 dark:to-violet-400 bg-clip-text text-transparent">Santhiya U</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-400 min-h-[32px] flex items-center gap-1.5"
          >
            <span>I am into</span>
            <span className="text-primary-600 dark:text-primary-400 font-semibold border-r-2 border-primary-500 animate-pulse pr-1">
              {displayText}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <button
              onClick={handleScrollToAbout}
              className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-slate-900/10 dark:shadow-white/5 hover:translate-y-[-2px] transition-all duration-200"
            >
              <span>About Me</span>
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/usanthiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105 transition-all duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/usanthiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-white hover:scale-105 transition-all duration-200 shadow-sm"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual/Image Column */}
        <div className="md:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Ambient Background Glow behind profile icon */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/25 to-violet-500/25 dark:from-primary-500/10 dark:to-violet-500/10 rounded-full blur-3xl" />
            
            {/* Visual Icon card/frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden glass-card shadow-2xl p-6 flex flex-col items-center justify-center border-slate-200/50 dark:border-slate-800/40">
              <div className="w-full h-full bg-gradient-to-br from-primary-50 to-violet-50 dark:from-slate-950 dark:to-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                {/* Visual Graphic Representation */}
                <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                
                {/* SVG developer visualization */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="w-32 h-32 text-primary-500 dark:text-primary-400/80 drop-shadow-xl animate-bounce"
                  style={{ animationDuration: '6s' }}
                >
                  <path d="M18 10h-1.25A3.25 3.25 0 0 0 13.5 6.75V5.5A1.5 1.5 0 0 0 12 4v0a1.5 1.5 0 0 0-1.5 1.5v1.25A3.25 3.25 0 0 0 7.25 10H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" />
                  <path d="M9 14h.01M15 14h.01M12 17h.01" strokeWidth="2" strokeLinecap="round" />
                </svg>
                
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Coding the Future</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
