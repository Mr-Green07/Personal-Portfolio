"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Phone, Github, Linkedin, Calendar, BookOpen, Award } from "lucide-react";
import { personalInfo, education, certifications } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/6 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-4 block">Who I Am</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-none">
              About Me
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">{personalInfo.summary}</p>
          </motion.div>
        </div>
      </section>

      {/* Bio + Contact */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main bio */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <h2 className="font-display font-bold text-2xl text-white mb-5">Professional Summary</h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    I&apos;m <span className="text-white font-medium">Yuvraj Singh</span>, an aspiring AI/ML Engineer currently pursuing my B.E. in Computer Science at Chandigarh University (2023–2027). My work focuses on building intelligent systems that can operate at the edge — efficient, private, and fast.
                  </p>
                  <p>
                    My core expertise spans <span className="text-teal-400">deep learning, computer vision, speech recognition</span>, and <span className="text-teal-400">natural language processing</span>. I&apos;ve built systems ranging from facial emotion classifiers to on-device LLM assistants that require no cloud connectivity.
                  </p>
                  <p>
                    I&apos;m passionate about the intersection of AI and resource-constrained environments — making intelligence available everywhere, even without internet access. My long-term goal is to contribute to edge AI deployment at scale.
                  </p>
                </div>
              </AnimatedSection>

              {/* Core interests */}
              <AnimatedSection delay={0.1}>
                <h2 className="font-display font-bold text-2xl text-white mb-5">Core Interests</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { emoji: "🧠", title: "Representation Learning", desc: "Feature extraction & discriminative embeddings" },
                    { emoji: "📱", title: "Edge AI", desc: "Low-latency inference on constrained devices" },
                    { emoji: "👁️", title: "Computer Vision", desc: "CNNs, object detection, image classification" },
                    { emoji: "🎙️", title: "Speech & Audio", desc: "Signal processing, ASR, audio AI" },
                    { emoji: "🤖", title: "LLMs & NLP", desc: "On-device language models, NLP pipelines" },
                    { emoji: "🔬", title: "Model Optimization", desc: "Quantization, pruning, efficient deployment" },
                  ].map(({ emoji, title, desc }, i) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#111118] border border-white/5 hover:border-teal-400/20 transition-all group"
                    >
                      <span className="text-2xl">{emoji}</span>
                      <div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">{title}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar: contact & info */}
            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <div className="p-6 rounded-2xl bg-[#111118] border border-white/5">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Contact Info</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: Mail, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                      { icon: Phone, value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                      { icon: MapPin, value: personalInfo.location, href: undefined },
                      { icon: Github, value: "Mr-Green07", href: personalInfo.github },
                      { icon: Linkedin, value: "yuvraj-singh-45o12", href: personalInfo.linkedin },
                    ].map(({ icon: Icon, value, href }) => (
                      <li key={value}>
                        {href ? (
                          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-3 text-sm text-gray-400 hover:text-teal-400 transition-colors">
                            <Icon size={15} className="text-teal-400 shrink-0" />
                            <span className="truncate">{value}</span>
                          </a>
                        ) : (
                          <div className="flex items-center gap-3 text-sm text-gray-400">
                            <Icon size={15} className="text-teal-400 shrink-0" />
                            <span>{value}</span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <div className="p-6 rounded-2xl border border-teal-400/15 bg-teal-400/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-sm font-semibold text-teal-400">Status</span>
                  </div>
                  <p className="py-2 text-white font-medium text-sm">Open to AI/ML Opportunities</p>
                  <p className="text-gray-400 text-xs mt-1">Full-time, internships & project collaborations</p>
                  <p className="py-2 text-white text-sm font-medium mt-1">Open to System Engineering</p>
                  <p className="text-gray-400 text-xs  mt-1">Full time, Internship & project collaboration</p>
                  <p className="py-2 text-white font-medium text-sm">Open to Business Analyst Opportunities</p>
                  <p className="text-gray-400 text-xs mt-1">Full time, Internship & project collaboration</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3 block">Academic Background</span>
            <h2 className="font-display font-bold text-4xl text-white">Education</h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/50 via-teal-400/20 to-transparent" />
            <div className="space-y-10">
              {education.map((edu, i) => (
                <AnimatedSection key={edu.id} delay={i * 0.1}>
                  <div className="relative flex gap-8">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-teal-400/10 border-2 border-teal-400/40 flex items-center justify-center z-10">
                      <GraduationCap size={20} className="text-teal-400" />
                    </div>
                    <div className="flex-1 p-6 rounded-2xl bg-[#0a0a0f] border border-white/5 hover:border-teal-400/20 transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-display font-bold text-xl text-white">{edu.institution}</h3>
                          <p className="text-teal-400 text-sm font-medium mt-0.5">{edu.degree}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1 justify-end">
                            <Calendar size={12} /> {edu.duration}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 justify-end">
                            <MapPin size={12} /> {edu.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award size={14} className="text-teal-400" />
                        <span className="text-sm text-gray-300">{edu.grade}</span>
                      </div>
                      {edu.coursework.length > 0 && (
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                            <BookOpen size={12} /> Relevant Coursework
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((c) => (
                              <span key={c} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5">{c}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3 block">Credentials</span>
            <h2 className="font-display font-bold text-4xl text-white">Certifications & Achievements</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.id} delay={i * 0.08}>
                <div className="h-full p-6 rounded-2xl border border-white/7 bg-[#111118] hover:border-teal-400/25 transition-all duration-300 group hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className={`font-semibold text-sm mb-2 group-hover:${cert.color} transition-colors ${cert.color}`}>{cert.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{cert.issuer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
