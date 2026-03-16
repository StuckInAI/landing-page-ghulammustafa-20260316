const testimonials = [
  {
    quote:
      "NexaFlow completely transformed how our engineering team works. We went from spending 40% of our time on coordination overhead to less than 10%. It's been a game changer.",
    name: "Sarah Chen",
    role: "VP of Engineering at Stripe",
    avatar: "SC",
    avatarColor: "from-blue-500 to-cyan-500",
    rating: 5
  },
  {
    quote:
      "I've tried every project management tool out there. NexaFlow is the first one that actually gets out of your way. The AI suggestions alone save me 2 hours every single day.",
    name: "Marcus Williams",
    role: "Founder & CEO at BuildFast",
    avatar: "MW",
    avatarColor: "from-purple-500 to-pink-500",
    rating: 5
  },
  {
    quote:
      "The integration with our existing tools was seamless. Within a week, our entire 200-person company was onboarded. The Slack integration alone is worth the subscription price.",
    name: "Priya Patel",
    role: "Head of Product at Notion",
    avatar: "PP",
    avatarColor: "from-green-500 to-teal-500",
    rating: 5
  },
  {
    quote:
      "Our client delivery time improved by 35% in the first quarter using NexaFlow. The reporting features give our stakeholders exactly the visibility they need without any manual work.",
    name: "Tom Andersson",
    role: "Director of Operations at Accenture",
    avatar: "TA",
    avatarColor: "from-orange-500 to-red-500",
    rating: 5
  },
  {
    quote:
      "As a remote-first company, NexaFlow's real-time collaboration features are essential. It feels like everyone is in the same room even when we're spread across 12 time zones.",
    name: "Lisa Rodriguez",
    role: "CTO at Remote Inc.",
    avatar: "LR",
    avatarColor: "from-indigo-500 to-blue-500",
    rating: 5
  },
  {
    quote:
      "The automation capabilities are genuinely impressive. We automated our entire sprint planning process and our developers now spend 100% of their time writing actual code.",
    name: "James Kim",
    role: "Engineering Manager at Figma",
    avatar: "JK",
    avatarColor: "from-yellow-500 to-orange-500",
    rating: 5
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Loved by 50,000+ teams
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what engineering and product leaders say about NexaFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <StarRating count={testimonial.rating} />

              <blockquote className="mt-4 text-slate-700 leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust logos */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm font-medium mb-8 uppercase tracking-widest">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Stripe", "Figma", "Notion", "Vercel", "Linear", "Loom"].map((company) => (
              <span key={company} className="text-2xl font-black text-slate-300 hover:text-slate-400 transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
