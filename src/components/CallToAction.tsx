"use client";

import { useState } from "react";

export default function CallToAction() {
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
    <section
      id="cta"
      className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-500 opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-8">
          Start Today
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to supercharge
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
            your development?
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Join over 10,000 developers and teams who ship better products faster
          with NextLaunch. Get started free — no credit card required.
        </p>

        {status === "success" ? (
          <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 max-w-md mx-auto">
            <svg
              className="w-12 h-12 text-green-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-white text-xl font-bold mb-2">You're on the list!</h3>
            <p className="text-green-200">{message}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-base"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap text-base"
            >
              {status === "loading" ? "Joining..." : "Get Early Access"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-300 text-sm mt-3">{message}</p>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-200/70 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free 14-day trial
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
