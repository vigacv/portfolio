import About from "./about";
import Hero from "./hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <About />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
