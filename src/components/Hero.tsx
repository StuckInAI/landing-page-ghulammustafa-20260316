"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { message?: string; error?: string };
      if (res.ok) {
        setStatus("success");
        setMessage(data.message ?? "Successfully subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-500 opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600 opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Now in public beta — Get early access</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Build Faster,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
            Ship Smarter
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          The modern platform for ambitious teams who want to deliver
          high-quality products at lightning speed — without the complexity.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-7 py-3.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading" ? "Subscribing..." : "Get Started Free"}
          </button>
        </form>

        {message && (
          <p
            className={`text-sm font-medium ${
              status === "success" ? "text-green-300" : "text-red-300"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-blue-200/70 text-sm mt-4">No credit card required · Free forever plan · Cancel anytime</p>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-blue-200">
          {[
            { value: "10K+", label: "Active Users" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "50ms", label: "Avg Response" },
            { value: "4.9★", label: "User Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-blue-200/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
