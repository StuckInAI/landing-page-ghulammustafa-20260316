'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message);
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className={styles.newsletter} id="newsletter">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.glow}></div>
          <span className={styles.eyebrow}>Stay in the loop</span>
          <h2 className={styles.title}>Get early access</h2>
          <p className={styles.subtitle}>
            Be the first to know about new features, updates, and exclusive launches.
            No spam, ever.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>✉️</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={styles.input}
                disabled={status === 'loading' || status === 'success'}
                required
              />
            </div>
            <button
              type="submit"
              className={`${styles.submitBtn} ${status === 'loading' ? styles.loading : ''}`}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? (
                <span className={styles.spinner}></span>
              ) : status === 'success' ? (
                '✓ Subscribed!'
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
          {message && (
            <div
              className={`${styles.message} ${
                status === 'success' ? styles.successMsg : styles.errorMsg
              }`}
            >
              {message}
            </div>
          )}
          <p className={styles.privacy}>🔒 We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}
