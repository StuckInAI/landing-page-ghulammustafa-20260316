'use client';

import { useState } from 'react';

export default function CallToAction() {
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
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block bg-white/10 border border-white/20 text-primary-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          🎉 Limited Time Offer
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Start Building Your
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-accent-300">
            Dream Product Today
          </span>
        </h2>

        <p className="text-xl text-primary-200 mb-4 max-w-2xl mx-auto leading-relaxed">
          Join over 10,000 builders who are already using LaunchPad to turn their ideas into reality. Sign up free — no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-300 mb-10">
          {['Free plan forever', 'Setup in under 5 minutes', 'Cancel anytime'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>

        {status === 'success' ? (
          <div className="bg-green-500/20 border border-green-500/40 rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-white font-bold text-xl mb-2">You&apos;re on the list!</h3>
            <p className="text-green-300">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={status === 'loading'}
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 text-base disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg text-base disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Joining...
                </span>
              ) : 'Get Early Access →'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-4 text-red-300 text-sm bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-2 inline-block">
            ❌ {message}
          </p>
        )}

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              name: 'Starter',
              price: 'Free',
              period: 'forever',
              features: ['1 project', '5GB storage', 'Basic analytics', 'Community support'],
              highlight: false,
            },
            {
              name: 'Pro',
              price: '$29',
              period: 'per month',
              features: ['Unlimited projects', '100GB storage', 'Advanced analytics', 'Priority support', 'Custom domains'],
              highlight: true,
            },
            {
              name: 'Enterprise',
              price: '$99',
              period: 'per month',
              features: ['Everything in Pro', 'Unlimited storage', 'Dedicated support', 'SLA guarantee', 'SSO & SAML'],
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 text-left transition-all duration-300 ${
                plan.highlight
                  ? 'bg-white shadow-2xl scale-105'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="text-xs font-bold text-accent-600 uppercase tracking-wider mb-2">Most Popular</div>
              )}
              <div className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-gray-900' : 'text-white'}`}>
                {plan.name}
              </div>
              <div className={`text-3xl font-extrabold mb-1 ${plan.highlight ? 'text-gray-900' : 'text-white'}`}>
                {plan.price}
              </div>
              <div className={`text-sm mb-5 ${plan.highlight ? 'text-gray-500' : 'text-primary-300'}`}>
                {plan.period}
              </div>
              <ul className="space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-gray-600' : 'text-primary-200'}`}>
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-500 hover:to-accent-500 shadow-md'
                    : 'bg-white/10 border border-white/30 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
