'use client';

import React, { useState } from 'react';

export default function CallToAction() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'exists'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
      } else if (response.status === 200) {
        setStatus('exists');
        setMessage(data.message || 'You are already subscribed!');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-block bg-indigo-800/60 border border-indigo-600/50 text-indigo-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
          Get Started Today
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to transform
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            how your team works?
          </span>
        </h2>

        <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join over 10,000 teams already using LaunchPad. Start your free 30-day trial today —
          no credit card required.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              disabled={status === 'loading'}
              className="flex-1 px-5 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-300 hover:to-purple-300 text-indigo-950 font-bold py-4 px-8 rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Start Free Trial'
              )}
            </button>
          </div>

          {/* Status messages */}
          {message && (
            <div
              className={`mt-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                status === 'success'
                  ? 'bg-green-500/20 border border-green-500/40 text-green-300'
                  : status === 'exists'
                  ? 'bg-blue-500/20 border border-blue-500/40 text-blue-300'
                  : 'bg-red-500/20 border border-red-500/40 text-red-300'
              }`}
            >
              {status === 'success' && '✅ '}
              {status === 'exists' && 'ℹ️ '}
              {status === 'error' && '❌ '}
              {message}
            </div>
          )}
        </form>

        <p className="mt-5 text-indigo-400 text-sm">
          No credit card required · Cancel anytime · GDPR compliant
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '10K+', label: 'Teams' },
            { value: '99.9%', label: 'Uptime' },
            { value: '500+', label: 'Integrations' },
            { value: '4.9★', label: 'Avg Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-indigo-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
