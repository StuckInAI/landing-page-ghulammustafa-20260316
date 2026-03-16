'use client';

import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="text-white font-bold text-xl">LaunchPad</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-primary-200 hover:text-white transition-colors duration-200 text-sm font-medium">Features</a>
          <a href="#testimonials" className="text-primary-200 hover:text-white transition-colors duration-200 text-sm font-medium">Testimonials</a>
          <a href="#cta" className="text-primary-200 hover:text-white transition-colors duration-200 text-sm font-medium">Pricing</a>
        </div>
        <a
          href="#cta"
          className="bg-white text-primary-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary-50 transition-colors duration-200 shadow-md"
        >
          Get Started
        </a>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-primary-100 text-sm font-medium">Now in public beta — Join 10,000+ builders</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Build Products
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-accent-300">
            That Matter
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          LaunchPad is the all-in-one platform that helps startups and indie hackers go from idea to launch in record time — with powerful analytics, seamless integrations, and a community that has your back.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={status === 'loading'}
            className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3.5 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-primary-500/50 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Joining...
              </span>
            ) : 'Get Early Access'}
          </button>
        </form>

        {message && (
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
              status === 'success'
                ? 'bg-green-500/20 border border-green-500/40 text-green-300'
                : 'bg-red-500/20 border border-red-500/40 text-red-300'
            }`}
          >
            {status === 'success' ? '✅' : '❌'} {message}
          </div>
        )}

        <p className="text-primary-400 text-sm mt-4">No credit card required. Free forever plan available.</p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10">
          {[
            { value: '10K+', label: 'Active Builders' },
            { value: '500+', label: 'Products Launched' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-primary-300 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
