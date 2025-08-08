"use client";
import { useState } from 'react';
import styles from './header.module.css';
import { Button } from '@/components/ui';
import { useTheme } from '../contexts/theme-context';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      <div className={styles.actions}>
        <Button
          iconName={theme === 'dark' ? 'light_mode' : 'dark_mode'}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        />
        <Button className={styles.menuButton} iconName='menu' onClick={() => setDrawerOpen(true)} aria-label='Open Menu' />
      </div>
      <div
        className={`${styles.drawerOverlay} ${drawerOpen ? styles.drawerOverlayVisible : styles.drawerOverlayHidden}`}
        onClick={() => setDrawerOpen(false)}
      >
        <div
          className={
            `${styles.drawer} ${drawerOpen ? styles.drawerOpen : styles.drawerClosed} ${theme === 'dark' ? styles.darkDrawer : ''}`
          }
          role='dialog'
          aria-modal="true"
          aria-label='Mobile Menu'
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.drawerContent}>
            <Button className={styles.closeButton} iconName='close' onClick={() => setDrawerOpen(false)} aria-label='Close Menu' />
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