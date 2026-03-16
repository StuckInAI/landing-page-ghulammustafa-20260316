const features = [
  {
    emoji: "⚡",
    title: "Lightning Fast Automation",
    description:
      "Automate repetitive tasks with our visual workflow builder. Set up complex automations in minutes, not hours, without writing a single line of code.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    emoji: "🤝",
    title: "Real-Time Collaboration",
    description:
      "Work together seamlessly with live editing, instant notifications, and threaded comments. Your whole team stays in sync, no matter where they are.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    emoji: "📊",
    title: "Advanced Analytics",
    description:
      "Make data-driven decisions with powerful dashboards. Track progress, identify bottlenecks, and optimize your team performance with real-time insights.",
    color: "from-green-400 to-teal-500"
  },
  {
    emoji: "🔒",
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SSO, audit logs, and granular permissions keep your data safe. SOC 2 Type II compliant and GDPR ready out of the box.",
    color: "from-purple-400 to-pink-500"
  },
  {
    emoji: "🔗",
    title: "200+ Integrations",
    description:
      "Connect NexaFlow with the tools you already love. Slack, GitHub, Jira, Salesforce, and hundreds more integrations available in one click.",
    color: "from-red-400 to-rose-500"
  },
  {
    emoji: "🤖",
    title: "AI Assistant",
    description:
      "Our built-in AI assistant helps you write better briefs, generate summaries, prioritize tasks, and surface insights from your project data automatically.",
    color: "from-indigo-400 to-blue-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Everything your team needs
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            NexaFlow combines powerful project management with smart automation and deep integrations to help you ship
            faster and work smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.emoji}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 p-10 md:p-16 text-white overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl" />
          </div>
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4">
                🚀 New in v3.0
              </span>
              <h3 className="text-3xl font-black mb-4">Visual Workflow Builder</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Drag, drop, and connect. Our new visual workflow builder lets you design complex automation pipelines
                with a simple, intuitive interface. No code required.
              </p>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition-colors"
              >
                Try it now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", text: "Drag & drop interface" },
                { icon: "⚙️", text: "100+ action blocks" },
                { icon: "🔄", text: "Conditional logic" },
                { icon: "📬", text: "Multi-step workflows" }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
