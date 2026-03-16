"use client";

import { useState } from "react";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="cta" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden p-12 md:p-20 text-white text-center shadow-2xl">
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-indigo-400 opacity-10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold mb-6">
              🎉 Limited time offer — 3 months free
            </span>

            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Ready to transform
              <br />
              <span className="text-blue-200">how you work?</span>
            </h2>

            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 50,000+ teams already using NexaFlow to ship faster. Subscribe to our newsletter for product updates,
              workflow tips, and exclusive early access to new features.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading"}
                className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading" || !email}
                className="px-6 py-4 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 whitespace-nowrap shadow-lg"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  "Get Early Access"
                )}
              </button>
            </form>

            {message && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium mb-4 ${
                  status === "success"
                    ? "bg-green-500/20 text-green-100 border border-green-400/30"
                    : "bg-red-500/20 text-red-100 border border-red-400/30"
                }`}
              >
                {status === "success" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {message}
              </div>
            )}

            <p className="text-blue-200 text-sm">No spam, ever. Unsubscribe at any time.</p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: "🚀", title: "Free 14-day trial", desc: "No credit card required" },
                { icon: "💬", title: "24/7 support", desc: "Human help, always available" },
                { icon: "🔒", title: "SOC 2 certified", desc: "Your data is always secure" }
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="font-bold">{item.title}</div>
                  <div className="text-blue-200 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
