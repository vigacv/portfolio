'use client';
import { DecryptedText, Icon } from "@/components/ui";
import styles from "./hero.module.css";
import { useEffect, useState } from "react";

export default function Hero() {
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
    
    function handleScroll() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        // Hide scroll indicator on scroll
        const handleScrollEvent = () => {
            setScrollIndicatorHidden(true);
        }
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle} aria-label="Gabriel Carmelo">
                    <span className={styles.slideInLeft}>Gabriel</span>{" "}
                    <DecryptedText text="Carmelo" className={styles.slideInUp} />
                </h1>
                <div className={styles.heroSubtitle}>Software Engineer</div>
                <p>Engineering <b>high-performance</b> scalable solutions with precision. Mastering <b>algorithms</b>, optimization, and <b>distributed architectures</b> across <b>cloud</b> ecosystems.</p>
                <div
                    className={`${styles.scrollIndicator} ${scrollIndicatorHidden ? styles.scrollIndicatorHidden : ''}`}
                    onClick={handleScroll}
                    role="button"
                    aria-hidden={scrollIndicatorHidden}
                    tabIndex={scrollIndicatorHidden ? -1 : 0}
                >
                    Scroll to explore
                    <Icon iconName="south" />
                </div>
            </div>
        </section>
    );
}