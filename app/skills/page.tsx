"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skills as fallback } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import { Code2, BrainCircuit, Wrench, Lightbulb } from "lucide-react";

type SkillsData = typeof fallback;

const sections = [
  { key: "programming", label: "Programming Languages", icon: Code2, color: "teal", gradient: "from-teal-400 to-cyan-400" },
  { key: "libraries", label: "Libraries & Tools", icon: Wrench, color: "purple", gradient: "from-purple-400 to-indigo-400" },
];

export default function SkillsPage() {
  const [data, setData] = useState<SkillsData>(fallback);

  useEffect(() => {
    fetch("/api/skills")
      .then((r) => r.json())
      .then((d) => { if (!d.success) return; })
      .catch(() => {});
  }, []);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/6 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-4 block">Expertise</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4 leading-none">
              Skills & Tools
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A full-stack AI/ML skillset — from signal processing to edge deployment, built through real projects and deep study.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skill Bars — Programming & Libraries */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {sections.map(({ key, label, icon: Icon, gradient }, si) => (
              <AnimatedSection key={key} delay={si * 0.1}>
                <div className="flex items-center gap-2.5 mb-8">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 flex items-center justify-center`} style={{ background: "rgba(0,212,170,0.1)" }}>
                    <Icon size={18} className="text-teal-400" />
                  </div>
                  <h2 className="font-display font-bold text-xl text-white">{label}</h2>
                </div>
                <div className="space-y-6">
                  {(data[key as keyof SkillsData] as Array<{ name: string; level: number }>).map(({ name, level }, i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-200 text-sm font-medium">{name}</span>
                        <span className="text-gray-500 text-xs font-mono">{level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 + 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full bg-gradient-to-r ${gradient} rounded-full relative`}
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 rounded-full blur-sm" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI/ML Tags */}
      <section className="py-20 bg-[#111118] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-2.5 mb-2">
              <BrainCircuit size={20} className="text-teal-400" />
              <h2 className="font-display font-bold text-2xl text-white">AI / ML Expertise</h2>
            </div>
            <p className="text-gray-500 text-sm mt-1 ml-7">Algorithms, architectures and techniques I work with regularly.</p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {data.aiml.map(({ name, level }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div
                  className="px-4 py-2.5 rounded-xl border border-teal-400/20 bg-teal-400/6 text-teal-300 text-sm font-medium cursor-default hover:border-teal-400/40 hover:bg-teal-400/12 transition-all duration-200"
                  title={`Proficiency: ${level}%`}
                >
                  {name}
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ width: `${level}%` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concepts Cloud */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-2.5">
              <Lightbulb size={20} className="text-yellow-400" />
              <h2 className="font-display font-bold text-2xl text-white">Key Concepts</h2>
            </div>
            <p className="text-gray-500 text-sm mt-2 ml-7">Theoretical and applied knowledge areas.</p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-2.5">
            {data.concepts.map((concept, i) => (
              <motion.span
                key={concept}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="px-4 py-2 rounded-xl bg-white/4 border border-white/8 text-gray-300 text-sm hover:border-white/15 hover:bg-white/6 transition-all"
              >
                {concept}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111118] border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-2xl text-white mb-3">Want to work together?</h2>
            <p className="text-gray-400 text-sm mb-6">
              I&apos;m actively seeking AI/ML roles. Let&apos;s see how my skills can help your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/contact" className="px-6 py-3 rounded-xl bg-teal-400 text-black font-semibold text-sm hover:bg-teal-300 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-400/30">
                Get In Touch
              </a>
              <a href="/projects" className="px-6 py-3 rounded-xl border border-white/10 text-gray-300 font-medium text-sm hover:border-teal-400/30 hover:text-teal-400 transition-all">
                See My Projects
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
