import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGlow2}></div>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Now in Public Beta
        </div>
        <h1 className={styles.headline}>
          Build Something
          <span className={styles.gradient}> Amazing</span>
          <br />Faster Than Ever
        </h1>
        <p className={styles.subheadline}>
          LaunchPad gives your team the tools to ship products at lightning speed.
          Modern, scalable, and beautifully designed from the ground up.
        </p>
        <div className={styles.ctas}>
          <a href="#newsletter" className={styles.primaryBtn}>
            Start for Free
            <span className={styles.arrow}>→</span>
          </a>
          <a href="#features" className={styles.secondaryBtn}>
            Explore Features
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10K+</span>
            <span className={styles.statLabel}>Users</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>99.9%</span>
            <span className={styles.statLabel}>Uptime</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50ms</span>
            <span className={styles.statLabel}>Avg Response</span>
          </div>
        </div>
      </div>
    </section>
  );
}
