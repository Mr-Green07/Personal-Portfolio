"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/25 group-hover:shadow-teal-500/40 transition-all">
            <Code2 size={18} className="text-black" />
          </div>
          <span className="font-display font-bold text-lg text-white tracking-tight">
            Yuvraj<span className="text-teal-400">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    active ? "text-teal-400" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-teal-400/10 rounded-lg border border-teal-400/20"
                      transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="mailto:yuvrajkumar5070@gmail.com"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl bg-teal-400 text-black text-sm font-semibold hover:bg-teal-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/30"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#111118]/95 backdrop-blur-xl border-b border-white/5"
          >
            <ul className="px-6 py-4 space-y-1">
              {links.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === href
                        ? "bg-teal-400/10 text-teal-400 border border-teal-400/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
