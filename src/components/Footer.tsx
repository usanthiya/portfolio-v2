import { Linkedin, Github, Mail, Heart, Phone, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Bio Col */}
        <div className="md:col-span-5 flex flex-col items-start gap-4">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Santhiya's Portfolio
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Thanks for visiting my digital space! Follow me on socials to stay updated with my latest builds, innovations, and learning journey in tech. Keep rising 🚀
          </p>
        </div>

        {/* Quick Links Col */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className="inline-flex items-center gap-1.5 text-sm hover:text-primary-400 hover:translate-x-1 transition-all duration-200"
                >
                  <ChevronRight size={14} className="text-slate-600" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Col */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
            Contact Info
          </h4>
          <div className="flex flex-col gap-3.5 text-sm">
            <p className="flex items-center gap-3">
              <Phone size={16} className="text-slate-500" />
              <span>+91 6379477549</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail size={16} className="text-slate-500" />
              <a href="mailto:santhiyaudhya1@gmail.com" className="hover:text-primary-400 transition-colors">
                santhiyaudhya1@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-slate-500" />
              <span>Chidambaram, India</span>
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/usanthiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-primary-400 hover:scale-105 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/usanthiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white hover:scale-105 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:santhiyaudhya1@gmail.com"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-primary-400 hover:scale-105 transition-all duration-200"
              aria-label="Mail"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer / Credits */}
      <div className="border-t border-slate-900/60 bg-slate-950 py-6 px-6 text-center text-xs font-medium text-slate-500">
        <p className="flex items-center justify-center gap-1.5 flex-wrap">
          <span>Designed with</span>
          <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
          <span>by</span>
          <a
            href="https://www.linkedin.com/in/usanthiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-primary-400 underline decoration-dashed underline-offset-4 font-bold transition-colors"
          >
            Santhiya
          </a>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
