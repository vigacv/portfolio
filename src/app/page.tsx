import About from "./about";
import Connect from "./connect";
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
        <Connect />
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Gabriel Carmelo. Coded with ♥ in the digital realm.</p>
      </footer>
    </div>
  );
}
