import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at Nexus Labs',
    avatar: '👩‍💻',
    rating: 5,
    text: 'LaunchPad transformed how we ship products. We went from a 2-week deployment cycle to deploying multiple times a day. The performance improvements alone were worth it.',
  },
  {
    name: 'Marcus Williams',
    role: 'Founder at Orbit',
    avatar: '👨‍🚀',
    rating: 5,
    text: "I've used dozens of platforms over the years, but nothing comes close to the developer experience LaunchPad provides. It's like the platform was built by developers, for developers.",
  },
  {
    name: 'Priya Patel',
    role: 'Lead Engineer at Vertex',
    avatar: '👩‍🔬',
    rating: 5,
    text: 'The scalability is phenomenal. We handled a 50x traffic spike during our product launch without any issues. Our team sleeps soundly knowing LaunchPad has our back.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title}>Loved by builders worldwide</h2>
          <p className={styles.subtitle}>
            Join thousands of teams who trust LaunchPad to power their most critical products.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {'★'.repeat(t.rating)}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
