import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Built on cutting-edge infrastructure that delivers sub-50ms response times globally. Your users will never wait.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption, SOC 2 compliance, and real-time threat detection keep your data safe around the clock.',
  },
  {
    icon: '📈',
    title: 'Scales Infinitely',
    description:
      'From zero to millions of users without breaking a sweat. Auto-scaling infrastructure that grows with your business.',
  },
  {
    icon: '🎨',
    title: 'Beautiful by Default',
    description:
      'Stunning, accessible UI components and design tokens that make every product look and feel world-class.',
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Why LaunchPad</span>
          <h2 className={styles.title}>Everything you need to ship</h2>
          <p className={styles.subtitle}>
            We handle the complexity so you can focus on what matters — building great products.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
