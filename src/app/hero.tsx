import { DecryptedText, Icon } from "@/components/ui";
import styles from "./hero.module.css";

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle} aria-label="Gabriel Carmelo">
                    <span className={styles.slideInLeft}>Gabriel</span>{" "}
                    <DecryptedText text="Carmelo" className={styles.slideInUp} />
                </h1>
                <div className={styles.heroSubtitle}>Software Engineer</div>
                <p>Engineering <b>high-performance</b> scalable solutions with precision. Mastering <b>algorithms</b>, optimization, and <b>distributed architectures</b> across <b>cloud</b> ecosystems.</p>
                <div className={styles.scrollIndicator}>
                    Scroll to explore
                    <Icon iconName="south" />
                </div>
            </div>
        </section>
    );
}