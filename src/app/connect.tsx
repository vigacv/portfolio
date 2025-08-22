'use client';
import { Button } from '@/components/ui';
import styles from './connect.module.css';

export default function Connect() {
  return (
    <section id="connect">
      <h1 className="section-title">Connect</h1>
      <div className={styles.text}>
        <p >
          Ready to collaborate or have questions? Let&apos;s connect and create something amazing together!
        </p>
      </div>
      <div className={styles.buttons}>
        <Button
          iconName='email'
          className={`${styles.button} ${styles.emailButton}`}
          text='vgabrielcv@gmail.com'
          onClick={() => window.location.href = 'mailto:vgabrielcv@gmail.com'}
        />
        <button
          className={`${styles.button} ${styles.iconButton}`}
          aria-label='Connect on LinkedIn'
          onClick={() => window.open('https://www.linkedin.com/in/vigacv/', '_blank')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </button>
      </div>
    </section>
  );
}