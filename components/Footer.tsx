import Link from "next/link";
import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <Code2 size={18} className="text-black" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Yuvraj<span className="text-teal-400">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Aspiring AI/ML Engineer. Building intelligent systems for edge AI, representation learning & multimodal applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["/", "/about", "/projects", "/skills", "/contact"].map((href) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-teal-400 transition-colors capitalize">
                    {href === "/" ? "Home" : href.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:yuvrajkumar5070@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  <Mail size={14} /> yuvrajkumar5070@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916202897536" className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  <Phone size={14} /> +91-6202897536
                </a>
              </li>
              <li>
                <a href="https://github.com/Mr-Green07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  <Github size={14} /> Mr-Green07
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yuvraj-singh-45o12/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  <Linkedin size={14} /> yuvraj-singh-45o12
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {year} Yuvraj Singh. Built with Next.js, Tailwind CSS & Framer Motion.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Mr-Green07" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-teal-400 transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/yuvraj-singh-45o12/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-teal-400 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:yuvrajkumar5070@gmail.com" aria-label="Email" className="text-gray-600 hover:text-teal-400 transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
