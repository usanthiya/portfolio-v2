import { Mail, MapPin, Calendar, FileText, User } from "lucide-react";
import { motion } from "framer-motion";
import profilePic from "../assets/images/profile_picture.png";

export default function About() {
  const details = [
    {
      icon: <Mail size={18} className="text-primary-500" />,
      label: "Email",
      value: "santhiyaudhya1@gmail.com",
      href: "mailto:santhiyaudhya1@gmail.com",
    },
    {
      icon: <MapPin size={18} className="text-primary-500" />,
      label: "Location",
      value: "Chidambaram, India",
    },
    {
      icon: <Calendar size={18} className="text-primary-500" />,
      label: "Role",
      value: "Full Stack Developer",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-2xl backdrop-filter backdrop-blur-lg">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight inline-flex items-center gap-4">
            <User className="text-primary-500" size={32} />
            <span>
              About <span className="text-primary-600">Me</span>
            </span>
          </h2>
          <div className="w-16 h-1 bg-primary-600 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-72 h-72 rounded-3xl p-1.5 bg-primary-500 shadow-xl"
            >
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-2xl p-6 flex flex-col justify-between items-center">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="rounded-full w-40 h-40 object-cover"
                />
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                    Santhiya U
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Full Stack Developer
                  </p>
                </div>
                {/* Stats */}
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 w-full mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-col items-center text-center min-h-[70px]">
                    <span className="block text-2xl font-bold text-primary-600 dark:text-primary-400">
                      2+
                    </span>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 leading-tight">
                      Years <br /> Experience
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center min-h-[70px]">
                    <span className="block text-2xl font-bold text-primary-600 dark:text-primary-400">
                      10+
                    </span>
                    <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 leading-tight">
                      Skills <br /> Mastered
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Bio Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* <h3 className="text-3xl font-bold text-slate-800 dark:text-white">I’m Santhiya</h3> */}
            {/* <span className="inline-block px-4 py-1 rounded-lg text-sm font-bold bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-400">Full Stack Developer</span> */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Full Stack MERN Developer with 2+ years of experience building
              scalable and user‑centric web applications. Experienced in
              developing end‑to‑end solutions, modern responsive interfaces,
              backend APIs, and AI‑powered features including vector databases
              and AI model integrations. Passionate about building performant,
              maintainable applications and continuously exploring modern
              technologies and best practices.
            </p>
            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate block"
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-violet-600 hover:from-primary-700 hover:to-violet-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:translate-y-[-2px] transition-all duration-200"
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
