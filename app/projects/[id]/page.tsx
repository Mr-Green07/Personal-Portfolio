import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Calendar, Tag, CheckCircle, ArrowLeft, Layers } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.shortDesc,
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-24 relative grid-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 mb-10 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Projects
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className={`text-4xl w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center border border-white/5`}>
              {project.icon}
            </div>
            <div>
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">{project.category}</span>
              {project.featured && (
                <span className="ml-3 text-xs font-semibold bg-teal-400/15 text-teal-400 border border-teal-400/25 px-2.5 py-0.5 rounded-full">
                  Featured
                </span>
              )}
            </div>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
            <Calendar size={14} className="text-teal-400" />
            <span>{project.period}</span>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Highlights */}
            <div>
              <h2 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
                <CheckCircle size={18} className="text-teal-400" />
                Key Highlights
              </h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <span className="text-gray-400 text-sm leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
                <Tag size={18} className="text-teal-400" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-2 rounded-xl bg-teal-400/8 border border-teal-400/20 text-teal-300 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-[#111118] border border-white/5">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Project Info</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-500">Duration</dt>
                    <dd className="text-gray-300">{project.period}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-500">Category</dt>
                    <dd className="text-gray-300">{project.category}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-500">Status</dt>
                    <dd className="text-teal-400">Completed</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-16 bg-[#111118] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-2">
              <Layers size={20} className="text-teal-400" />
              Other Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group p-5 rounded-2xl border border-white/7 bg-[#0a0a0f] hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-xs text-gray-500 font-medium">{p.category}</span>
                  </div>
                  <h3 className="font-semibold text-white text-sm group-hover:text-teal-400 transition-colors mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{p.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
