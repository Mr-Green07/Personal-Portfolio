"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail, Cpu, Brain, Zap, ChevronRight } from "lucide-react";
import { projects, skills, certifications } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";

const roles = ["AI / ML Engineer", "Deep Learning Dev", "Python Engineer", "Edge AI Builder","System Engineer","Business Analyst"];

function TypewriterText({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 40 : 80;
    const word = words[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1800);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words]);

  return (
    <span className="gradient-text font-display">
      {text}
      <span className="animate-pulse text-teal-400">|</span>
    </span>
  );
}

const stats = [
  { value: "3+", label: "AI/ML Projects", icon: Brain },
  { value: "4+", label: "Certifications", icon: Zap },
  { value: "7+", label: "Languages", icon: Cpu },
  { value: "2026", label: "Actively Learning", icon: ChevronRight },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const ySpring = useSpring(y, { damping: 20, stiffness: 100 });

  const [projectData, setProjectData] = useState(projects);

  // Demo API call on mount
  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => { if (d.success) setProjectData(d.data); })
      .catch(() => setProjectData(projects));
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden grid-bg pt-20">
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px]" />
          <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
        </div>

        <motion.div style={{ y: ySpring, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-teal-400/25 bg-teal-400/8 text-teal-400 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Open to AI/ML opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white mb-4 leading-none tracking-tight"
          >
            Yuvraj Singh
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-8 h-14 flex items-center justify-center"
          >
            <TypewriterText words={roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Building intelligent systems for <span className="text-teal-400">edge AI</span>,{" "}
            <span className="text-cyan-400">representation learning</span>, and{" "}
            <span className="text-purple-400">multimodal applications</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-xl bg-teal-400 text-black font-semibold text-base hover:bg-teal-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-400/30 flex items-center gap-2"
            >
              View Projects <ArrowDown size={16} className="rotate-[-90deg]" />
            </Link>
            <a
              href="mailto:yuvrajkumar5070@gmail.com"
              className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-medium text-base hover:border-teal-400/40 hover:bg-teal-400/5 transition-all duration-200 flex items-center gap-2"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { href: "https://github.com/Mr-Green07", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/yuvraj-singh-45o12/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:yuvrajkumar5070@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-400/30 hover:bg-teal-400/5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-600"
          >
            <ArrowDown size={20} />
          </motion.div>
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <AnimatedSection key={label} delay={i * 0.08} className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-400/20 transition-colors">
                  <Icon size={20} className="text-teal-400" />
                </div>
                <div className="font-display font-black text-3xl text-white mb-1">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Preview ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3 block">Portfolio</span>
                <h2 className="font-display font-black text-4xl text-white">Featured Projects</h2>
                <p className="text-gray-400 mt-3 max-w-xl">Real-world AI/ML systems built from scratch.</p>
              </div>
              <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors font-medium">
                All Projects <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {projectData.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-teal-400 font-medium">
              See All Projects <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Skills Highlight ── */}
      <section className="py-24 bg-[#111118]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3 block">Expertise</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">Core Skills</h2>
            <p className="text-gray-400 max-w-lg mx-auto">AI/ML stack built through real projects and deep study.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Programming */}
            <AnimatedSection delay={0.1}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Programming</h3>
              <div className="space-y-4">
                {skills.programming.map(({ name, level }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300 font-medium">{name}</span>
                      <span className="text-gray-500">{level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* AI/ML */}
            <AnimatedSection delay={0.15}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">AI / ML</h3>
              <div className="flex flex-wrap gap-2">
                {skills.aiml.map(({ name }, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="px-3 py-1.5 rounded-xl bg-teal-400/8 border border-teal-400/20 text-teal-300 text-sm font-medium hover:bg-teal-400/15 transition-colors"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 mt-8">Libraries & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.libraries.map(({ name }, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="px-3 py-1.5 rounded-xl bg-white/4 border border-white/8 text-gray-300 text-sm font-medium hover:border-teal-400/20 transition-colors"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-10 text-center">
            <Link href="/skills" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 text-sm font-medium hover:border-teal-400/30 hover:text-teal-400 transition-all duration-200">
              Explore Full Skills <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3 block">Achievements</span>
            <h2 className="font-display font-black text-4xl text-white">Certifications</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.id} delay={i * 0.08}>
                <div className="p-5 rounded-2xl border border-white/7 bg-[#111118] hover:border-teal-400/25 transition-all duration-300 group">
                  <div className="text-3xl mb-3">{cert.icon}</div>
                  <h4 className={`font-semibold text-sm mb-1 ${cert.color}`}>{cert.title}</h4>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#111118]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="p-12 rounded-3xl border border-teal-400/15 bg-gradient-to-br from-teal-400/5 to-cyan-400/3 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-teal-400/10 rounded-full blur-3xl" />
              </div>
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-4 block">Let&apos;s Collaborate</span>
              <h2 className="font-display font-black text-4xl text-white mb-4">Got a Project in Mind?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I&apos;m actively looking for AI/ML roles and exciting projects. Let&apos;s build something intelligent together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-3.5 rounded-xl bg-teal-400 text-black font-semibold hover:bg-teal-300 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-400/30">
                  Start a Conversation
                </Link>
                <Link href="/about" className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-medium hover:border-teal-400/30 hover:bg-teal-400/5 transition-all">
                  Learn More About Me
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
