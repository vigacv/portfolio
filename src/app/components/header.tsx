"use client";
import { useState } from 'react';
import styles from './header.module.css'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.log("Header component rendered");
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>&lt;GC/&gt;</h1>

      <nav aria-label='Main Navigation'>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <button className={`${styles.menuButton} ${styles.button}`} onClick={() => setDrawerOpen(true)}>
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div
        className={`${styles.drawerOverlay} ${drawerOpen ? styles.drawerOverlayVisible : styles.drawerOverlayHidden}`}
        onClick={() => setDrawerOpen(false)}
      >
        <div
          className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : styles.drawerClosed}`}
          role='dialog'
          aria-modal="true"
          aria-label='Mobile Menu'
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.drawerContent}>
            <button
              className={`${styles.button} ${styles.closeButton}`}
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <nav aria-label='Main Navigation'>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}