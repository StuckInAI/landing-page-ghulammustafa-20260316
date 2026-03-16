const features = [
  {
    icon: '🚀',
    title: 'Lightning-Fast Launch',
    description:
      'Go from idea to live product in hours, not months. Our streamlined workflow and pre-built templates get you to market faster than ever before.',
  },
  {
    icon: '📊',
    title: 'Powerful Analytics',
    description:
      'Understand your users deeply with real-time dashboards, funnel analysis, and behavioral insights that help you make data-driven decisions.',
  },
  {
    icon: '🔗',
    title: 'Seamless Integrations',
    description:
      'Connect with 200+ tools you already love — Stripe, Slack, Notion, Zapier, and more. Automate your workflow without writing a single line of code.',
  },
  {
    icon: '🛡️',
    title: 'Enterprise-Grade Security',
    description:
      'Your data is protected with end-to-end encryption, SOC 2 compliance, and daily backups. We take security as seriously as you do.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Workspace',
    description:
      'Invite your team, assign roles, leave comments, and collaborate in real-time. Build better products together with built-in teamwork tools.',
  },
  {
    icon: '🌍',
    title: 'Global CDN & Scale',
    description:
      'Deploy to 30+ edge locations worldwide. Auto-scaling infrastructure ensures your product stays fast and reliable no matter how big you grow.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why LaunchPad?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Everything You Need to
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">
              Succeed Online
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve packed every feature a modern product team needs into one beautifully simple platform. No more juggling dozens of tools.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 group"
          >
            Explore all features
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
