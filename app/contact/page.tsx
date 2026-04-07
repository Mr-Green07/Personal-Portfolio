"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { personalInfo } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const contactDetails = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined },
  { icon: Github, label: "GitHub", value: "github.com/Mr-Green07", href: personalInfo.github },
  { icon: Linkedin, label: "LinkedIn", value: "yuvraj-singh-45o12", href: personalInfo.linkedin },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-teal-500/6 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-4 block">Let&apos;s Connect</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4 leading-none">
              Contact Me
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Open to AI/ML roles, internships, research collaborations, and freelance projects. Let&apos;s build something intelligent together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <h2 className="font-display font-bold text-xl text-white mb-6">Get in Touch</h2>
                <ul className="space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center shrink-0 group-hover:bg-teal-400/20 transition-colors">
                            <Icon size={15} className="text-teal-400" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                            <div className="text-sm text-gray-300 group-hover:text-teal-400 transition-colors break-all">{value}</div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                            <Icon size={15} className="text-gray-400" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                            <div className="text-sm text-gray-300">{value}</div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="p-5 rounded-2xl border border-teal-400/15 bg-teal-400/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-sm font-semibold text-teal-400">Currently Available</span>
                  </div>
                  <p className="text-gray-300 text-sm font-medium">Open to AI/ML Opportunities</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Full-time roles · Internships · Research collabs · Freelance projects</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="p-5 rounded-2xl border border-white/5 bg-[#111118]">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Response Time</h3>
                  <p className="text-gray-300 text-sm">Usually within <span className="text-teal-400 font-semibold">24–48 hours</span>.</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="p-12 rounded-2xl bg-teal-400/8 border border-teal-400/25 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", damping: 12, stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-teal-400/15 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={40} className="text-teal-400" />
                  </motion.div>
                  <h2 className="font-display font-bold text-2xl text-white mb-3">Message Sent! 🎉</h2>
                  <p className="text-gray-400 mb-8">Thanks for reaching out. Yuvraj will get back to you within 24–48 hours.</p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="px-6 py-2.5 rounded-xl border border-white/10 text-gray-300 text-sm hover:border-teal-400/30 hover:text-teal-400 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <AnimatedSection delay={0.1}>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {[
                        { id: "name", label: "Full Name", type: "text", placeholder: "Yuvraj Singh", required: true },
                        { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com", required: true },
                      ].map(({ id, label, type, placeholder, required }) => (
                        <div key={id}>
                          <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
                            {label} {required && <span className="text-teal-400">*</span>}
                          </label>
                          <input
                            id={id} type={type} placeholder={placeholder} required={required}
                            value={form[id as keyof typeof form]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-white/8 text-white text-sm placeholder-gray-600 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/20 outline-none transition-all"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <input
                        id="subject" type="text" placeholder="Job opportunity / Collaboration / Project"
                        value={form.subject} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-white/8 text-white text-sm placeholder-gray-600 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message <span className="text-teal-400">*</span>
                      </label>
                      <textarea
                        id="message" rows={7} required
                        placeholder="Tell me about your project, role, or idea. I'd love to hear about it!"
                        value={form.message} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-white/8 text-white text-sm placeholder-gray-600 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/20 outline-none transition-all resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-400 text-sm p-3.5 rounded-xl bg-red-400/8 border border-red-400/20"
                      >
                        <AlertCircle size={16} />
                        <span>{errorMsg || "Failed to send. Please try again."}</span>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 rounded-xl bg-teal-400 text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-teal-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-400/30"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>

                    <p className="text-xs text-gray-600 text-center">
                      Your message will be delivered directly to Yuvraj&apos;s inbox.
                    </p>
                  </form>
                </AnimatedSection>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
