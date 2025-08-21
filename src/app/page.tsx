import About from "./about";
import Hero from "./hero";
import styles from "./page.module.css";
import Skills from "./skills";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
