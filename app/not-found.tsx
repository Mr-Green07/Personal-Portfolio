import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center grid-bg">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="font-display font-black text-[10rem] leading-none text-white/5 select-none mb-4">
          404
        </div>
        <h1 className="font-display font-bold text-3xl text-white mb-3">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-400 text-black text-sm font-semibold hover:bg-teal-300 transition-all">
            <Home size={15} /> Go Home
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-300 text-sm font-medium hover:border-teal-400/30 hover:text-teal-400 transition-all">
            <ArrowLeft size={15} /> View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
