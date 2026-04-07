"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects as fallback } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Layers } from "lucide-react";

export default function ProjectsPage() {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => { if (d.success) setData(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = Array.from(new Set(data.map((p) => p.category)));

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-500/6 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-4 block">Portfolio</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4 leading-none">
              All Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              AI/ML systems built from scratch — spanning speech recognition, computer vision, and on-device language models.
            </p>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-2 mt-8"
          >
            <span className="px-3 py-1.5 rounded-full bg-teal-400/15 border border-teal-400/30 text-teal-400 text-xs font-semibold">
              All ({data.length})
            </span>
            {categories.map((cat) => (
              <span key={cat} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-gray-400 text-xs font-medium">
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-72 rounded-2xl bg-[#111118] border border-white/5 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {data.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && data.length === 0 && (
            <div className="text-center py-24">
              <Layers size={48} className="text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-400 mb-2">No projects found</h3>
              <p className="text-gray-600 text-sm">Check back soon for updates.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111118] border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-2xl text-white mb-3">Have a project in mind?</h2>
            <p className="text-gray-400 text-sm mb-6">I&apos;m always open to collaborating on interesting AI/ML work.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-400 text-black font-semibold text-sm hover:bg-teal-300 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-400/30"
            >
              Let&apos;s Talk
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
