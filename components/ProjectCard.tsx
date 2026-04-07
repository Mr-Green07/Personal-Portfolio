"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  tags: string[];
  period: string;
  category: string;
  icon: string;
  color: string;
  featured?: boolean;
}

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <Link
        href={`/projects/${project.id}`}
        className="block h-full rounded-2xl border border-white/7 bg-[#111118] p-6 transition-all duration-300 hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-500/5"
      >
        {/* Gradient header */}
        <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {project.featured && (
          <span className="absolute top-4 right-4 text-xs font-semibold bg-teal-400/15 text-teal-400 border border-teal-400/25 px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}

        {/* Icon & category */}
        <div className="flex items-start justify-between mb-4">
          <div className={`text-3xl w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center border border-white/5`}>
            {project.icon}
          </div>
          <span className="text-xs text-gray-500 font-medium mt-1">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-teal-400 transition-colors leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">{project.shortDesc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-500">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar size={12} />
            <span>{project.period}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-teal-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Details <ArrowUpRight size={13} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
