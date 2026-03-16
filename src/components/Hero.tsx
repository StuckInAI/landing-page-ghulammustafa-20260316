import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500 opacity-5 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-6 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-white font-bold text-xl">NexaFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
            Testimonials
          </a>
          <a href="#cta" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
            Pricing
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden md:inline-flex text-slate-300 hover:text-white transition-colors text-sm font-medium"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Now with AI-powered automation
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          Ship Faster with
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            NexaFlow
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The all-in-one platform that helps modern teams collaborate seamlessly, automate workflows, and deliver
          exceptional products — faster than ever.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Start for Free
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </a>
        </div>

        <p className="mt-6 text-slate-500 text-sm">
          No credit card required &bull; Free 14-day trial &bull; Cancel anytime
        </p>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
          {[
            { value: "50K+", label: "Teams worldwide" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "2.4M", label: "Tasks automated" },
            { value: "4.9★", label: "Average rating" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
