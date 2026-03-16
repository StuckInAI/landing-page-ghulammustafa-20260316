import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "LaunchPad completely transformed how our engineering team operates. We cut our release cycle from two weeks to two days. It's the single best investment we've made this year.",
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechFlow Inc.',
    avatar: 'SC',
    rating: 5,
  },
  {
    quote: "I was skeptical at first, but after the first sprint I was hooked. The analytics alone gave us insights we never had before. Our team velocity increased by 40% in the first month.",
    name: 'Marcus Rodriguez',
    role: 'Product Manager',
    company: 'Velocity Labs',
    avatar: 'MR',
    rating: 5,
  },
  {
    quote: "The integrations are phenomenal. We connected our entire stack — GitHub, Slack, Figma, Notion — in under an hour. It just works. I can't imagine going back to how things were.",
    name: 'Priya Nair',
    role: 'CTO',
    company: 'NovaSpark',
    avatar: 'PN',
    rating: 5,
  },
  {
    quote: "Customer support is world-class. Any question we had was answered within minutes. The product itself is intuitive, but knowing there's a great team behind it gives us peace of mind.",
    name: 'James Whitfield',
    role: 'Founder & CEO',
    company: 'BuildRight Co.',
    avatar: 'JW',
    rating: 5,
  },
  {
    quote: "Migrating from our old tools was painless. The onboarding wizard guided us through everything and we were fully operational in a day. Highly recommend for any growing startup.",
    name: 'Amelia Torres',
    role: 'Operations Lead',
    company: 'Streamline HQ',
    avatar: 'AT',
    rating: 5,
  },
  {
    quote: "The no-code automation builder is a game changer. Our non-technical team members can now set up complex workflows without bothering engineering. It's empowering everyone.",
    name: 'David Kim',
    role: 'Head of Product',
    company: 'Pinnacle SaaS',
    avatar: 'DK',
    rating: 5,
  },
];

const gradients = [
  'from-indigo-500 to-purple-600',
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-pink-600',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-rose-500 to-pink-600',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Loved by
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> 10,000+ teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear what teams like yours are saying.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-[0.95rem]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role} · {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
