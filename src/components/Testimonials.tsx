const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO at Orbit',
    avatar: '👩‍💻',
    rating: 5,
    quote:
      'LaunchPad completely transformed how we bring products to market. We cut our time-to-launch from 3 months to 3 weeks. The analytics alone have been worth 10x the investment.',
  },
  {
    name: 'Marcus Thompson',
    role: 'CTO at NovaPulse',
    avatar: '👨‍🔬',
    rating: 5,
    quote:
      "I've tried every platform out there. LaunchPad is the first one that actually feels like it was built by people who understand what builders need. The integrations are seamless.",
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Product at Flowly',
    avatar: '👩‍🎨',
    rating: 5,
    quote:
      'Our conversion rates jumped 40% after switching to LaunchPad. The A/B testing and funnel analytics made it so easy to identify and fix leaky parts of our user journey.',
  },
  {
    name: 'Daniel Okafor',
    role: 'Indie Hacker & Maker',
    avatar: '🧑‍💼',
    rating: 5,
    quote:
      'As a solo founder, LaunchPad is like having a full engineering team behind me. I launched my SaaS in 2 weeks and hit $5K MRR within the first month. Truly incredible.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Lead at ScaleHQ',
    avatar: '👩‍💼',
    rating: 5,
    quote:
      'The collaborative features are fantastic — my remote team is more aligned than ever. Real-time comments, role-based access, and shared dashboards made a huge difference.',
  },
  {
    name: 'James Liu',
    role: 'Engineering Manager at Driftworks',
    avatar: '👨‍💻',
    rating: 5,
    quote:
      "Security was our biggest concern when evaluating platforms. LaunchPad's SOC 2 compliance and enterprise-grade encryption gave us the confidence to migrate our entire infrastructure.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-100 text-accent-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Loved by Builders
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Don&apos;t Take Our
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600"> Word For It</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of founders, engineers, and product teams trust LaunchPad to power their products. Here&apos;s what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="mb-4">
                <StarRating count={t.rating} />
              </div>
              <blockquote className="text-gray-700 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-11 h-11 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-gray-100">
          {['Y Combinator Alumni', 'Product Hunt #1', 'SOC 2 Certified', 'GDPR Compliant', '99.9% Uptime'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
